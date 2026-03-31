const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
btn.addEventListener("change", () => {
  chrome.storage.local.set({ checkTasks: btn.checked });
});
btn2.addEventListener("change", () => {
  chrome.storage.local.set({ autoClick: btn2.checked });
});
chrome.storage.local.get("checkTasks", (toggle) => {
  btn.checked = toggle.checkTasks;
});
chrome.storage.local.get("autoClick", (toggle) => {
  btn2.checked = toggle.autoClick;
});
