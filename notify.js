chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "notify") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "There are tasks available!",
      message: "Tasks are available to complete on Rater Hub :)",
    });
  }
});
