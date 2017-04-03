function sendScoreRequest(word) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://crab-core.herokuapp.com/score/"+word, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var resp = JSON.parse(xhr.responseText);
      if (resp.valid)
        new Notification("This word is valid", {body: "\""+resp.word+"\""+" score: "+resp.score})
      else
        new Notification("Sorry, this word is not valid :(")
      end
    }
  }
  xhr.send();
};

function onClickHandler(info, tab) {
  sendScoreRequest(info.selectionText);
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Score word";
  var id = "score_word";
  chrome.contextMenus.create({"title": title, "contexts":[context], "id": id});
});
