import consumer from "./consumer"

const matching_data = document.getElementById('matching-data')
const matchingId = matching_data && matching_data.dataset.matchingId;
if(matchingId) {
  const enemy1Sound = document.querySelector("#enemy1_respawn");
  const enemy2Sound = document.querySelector("#enemy2_respawn");
  const enemy3Sound = document.querySelector("#enemy3_respawn");
  const enemy4Sound = document.querySelector("#enemy4_respawn");

  async function playSound(action, enemy_no) {
    try {
      if(data.action == "respawn") {
        await this[`enemy${enemy_no}Sound`].play();
      } else if(data.action == "killed") {
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
