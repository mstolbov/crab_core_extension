function onClickHandler(info, tab) {
  new Notification("This word is valid", {body: "Score: 42"})
  new Notification("Sorry, this word is not valid :(")
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Score word";
  var id = "score_word";
  chrome.contextMenus.create({"title": title, "contexts":[context], "id": id});
});
