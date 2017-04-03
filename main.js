'use strict';

function CrabCore(host) {
  var self = this;
  this.host = host || "http://localhost";

  this.handleContextClick = function(info, tab) {
    self.getScore(info.selectionText, self.notify);
  };

  this.getScore = function(word, callback) {
    fetch(self.host+'/score/'+word)
    .then(function(response) { return response.json(); })
    .then(function(score) { callback(score) })
    .catch( console.error );
  };

  this.notify = function(score) {
    var notification;
    if (score.valid) {
      notification = new Notification('This word is valid', {
        body: '"'+score.word+'"'+' score: '+score.score
      })
    } else {
      notification = new Notification('Sorry, this word is not valid :(')
    }
    setTimeout(function() {
      notification.close();
    }, 5000);
  };
}

var scorer = new CrabCore('https://crab-core.herokuapp.com');

chrome.contextMenus.onClicked.addListener(scorer.handleContextClick);

chrome.runtime.onInstalled.addListener(function() {
  var context = 'selection';
  var title = 'Score word';
  var id = 'score_word';
  chrome.contextMenus.create({'title': title, 'contexts':[context], 'id': id});
});
