'use strict';

function onClickHandler(info, tab) {
  fetch("https://crab-core.herokuapp.com/score/"+info.selectionText)
  .then(function(response) { return response.json(); })
  .then(function(score) {
    if (score.valid)
      new Notification("This word is valid", {
        body: '"'+score.word+'"'+' score: '+score.score
      })
    else
      new Notification("Sorry, this word is not valid :(")
    end
  })
  .catch( console.error );
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Score word";
  var id = "score_word";
  chrome.contextMenus.create({"title": title, "contexts":[context], "id": id});
});
