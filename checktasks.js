const checkInterval = 30;
var ding = new Audio();
ding.src =
  "https://cdn.pixabay.com/download/audio/2025/11/06/audio_7830550753.mp3";
chrome.storage.local.get("checkTasks", (toggle) => {
  if (toggle.checkTasks) {
    if (!document.querySelector(".ewok-rater-no-tasks")) {
      chrome.runtime.sendMessage({
        action: "notify",
      });
      ding.play();
    }
    chrome.storage.local.get("autoClick", (toggle) => {
      if (toggle.autoClick) {
        document.querySelector(".button").click();
      }
    });
    setTimeout(() => {
      location.reload();
    }, checkInterval * 1000);
  }
});
