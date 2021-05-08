import consumer from "./consumer"

class Enemy {
  constructor(enemy_no) {
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
  getOld() {
    if(this.status == "live") {
      this.age = this.age + 1;
    }
  }
}

const matching_data = document.getElementById('matching-data')
const matchingId = matching_data && matching_data.dataset.matchingId;

if(matchingId) {
  window.enemy1 = new Enemy(1);
  window.enemy2 = new Enemy(2);
  window.enemy3 = new Enemy(3);
  window.enemy4 = new Enemy(4);

  async function playSound(action, enemy_no) {
    try {
      if(action == "respawn") {
        await window[`enemy${enemy_no}`].respawn();
      } else if(action == "killed") {
        await window[`enemy${enemy_no}`].killed();
      }
    } catch(err) {
      console.log(err);
    }
  }
  function getOld(enemy) {
    window.enemy1.getOld();
    window.enemy2.getOld();
    window.enemy3.getOld();
    window.enemy4.getOld();
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
      playSound(data.action, data.event.enemy_no);
    }
  });
}
