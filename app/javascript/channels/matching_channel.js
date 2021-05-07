import consumer from "./consumer"

const matchingId = document.getElementById('matching-data').dataset.matchingId;
if(matchingId) {
  const enemy1_sound = document.querySelector("#enemy1_respawn");
  const enemy2_sound = document.querySelector("#enemy2_respawn");
  const enemy3_sound = document.querySelector("#enemy3_respawn");
  const enemy4_sound = document.querySelector("#enemy4_respawn");

  async function playSound(enemy_no) {
    try {
      if(enemy_no == 1) {
        await enemy1_sound.play();
      } else if(enemy_no == 2) {
        await enemy2_sound.play();
      } else if(enemy_no == 3) {
        await enemy3_sound.play();
      } else if(enemy_no == 4) {
        await enemy4_sound.play();
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
      if(data.action == "respawn") {
        playSound(data.event.enemy_no);
      }
    }
  });
}
