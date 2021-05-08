import consumer from "./consumer"

export class EnemyMeter {
  constructor(enemy_no) {
    this.sound = document.querySelector(`#enemy${enemy_no}_respawn`)
  }
  async respawn() {
    this.sound.play();
  }
  async killed() {
  }
}

const matching_data = document.getElementById('matching-data')
const matchingId = matching_data && matching_data.dataset.matchingId;

if(matchingId) {
  window.enemy1 = new EnemyMeter(1);
  window.enemy2 = new EnemyMeter(2);
  window.enemy3 = new EnemyMeter(3);
  window.enemy4 = new EnemyMeter(4);

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
