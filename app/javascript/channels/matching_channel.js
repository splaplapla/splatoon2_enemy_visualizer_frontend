import consumer from "./consumer"

class EnemyRegistry {
  constructor(enemy) {
    this.enemies = []
  }
  register(enemy) {
    this.enemies.push(enemy);
  }
  find(enemy_no) {
    return this.enemies.find(enemy => enemy.no() == enemy_no);
  }
  enemies() {
    return this.enemies;
  }
}

class Enemy {
  constructor(enemy_no) {
    this.enemy_no = enemy_no
    this.sound = document.querySelector(`#enemy${enemy_no}_respawn`)
    this.age = 0
    this.status = "live"
  }
  async respawn() {
    this.sound.play();
    this.status = "live";
  }
  async killed() {
    this.age = 0;
    this.status = "death";
  }
  no() {
    return this.enemy_no
  }
  render() {
  }
  getOld() {
    if(this.status == "live") {
      this.age = this.age + 1;
    }
  }
}

const matching_data = document.getElementById('matching-data')
const matchingId = matching_data && matching_data.dataset.matchingId;

if(matchingId) {
  window.registry = new EnemyRegistry
  registry.register(new Enemy(1))
  registry.register(new Enemy(2))
  registry.register(new Enemy(3))
  registry.register(new Enemy(4))

  async function playSound(action, enemy_no) {
    try {
      if(action == "respawn") {
        await registry.find(enemy_no).respawn();
      } else if(action == "killed") {
        await registry.find(enemy_no).killed();
      }
    } catch(err) {
      console.log(err);
    }
  }
  function getOld(enemy) {
    window.registry.enemies.forEach(enemy => enemy.getOld())
  }

  window.setInterval(getOld, 1000);

  consumer.subscriptions.create({ channel: "MatchingChannel", matching_id: matchingId }, {
    connected() {
      console.log("MatchingChannel.connected")
    },
    disconnected() {
      console.log("MatchingChannel.disconnected")
    },
    received(data) {
      console.log("MatchingChannel.received", data);
      playSound(data.action, data.enemy_no);
    }
  });
}
