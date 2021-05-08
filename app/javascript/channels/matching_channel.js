import consumer from "./consumer"

const matching_data = document.getElementById('matching-data')
const matchingId = matching_data && matching_data.dataset.matchingId;
if(matchingId) {
  window.enemy1Sound = document.querySelector("#enemy1_respawn");
  window.enemy2Sound = document.querySelector("#enemy2_respawn");
  window.enemy3Sound = document.querySelector("#enemy3_respawn");
  window.enemy4Sound = document.querySelector("#enemy4_respawn");

  async function playSound(action, enemy_no) {
    try {
      if(action == "respawn") {
        await window[`enemy${enemy_no}Sound`].play();
      } else if(action == "killed") {
        // TODO
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
