'use strict';

function CrabCoreScorer(options) {
  var self = this;
  this.host = options.host || "http://localhost";

  this.getScore = function(word, callback) {
    fetch(self.host+'/score/'+word)
    .then(function(response) { return response.json(); })
    .then(function(score) { callback(score) })
    .catch( console.error );
  };
}

function CrabCore(options) {
  var self = this;
  this.scorer = options.scorer || new CrabCoreScorer();

  this.handleContextClick = function(info, tab) {
    self.scorer.getScore(info.selectionText, self.notify);
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

var scorer = new CrabCoreScorer({host: 'https://crab-core.herokuapp.com'});
var core = new CrabCore({scorer: scorer});

chrome.contextMenus.onClicked.addListener(core.handleContextClick);

chrome.runtime.onInstalled.addListener(function() {
  var context = 'selection';
  var title = 'Score word';
  var id = 'score_word';
  chrome.contextMenus.create({'title': title, 'contexts':[context], 'id': id});
});
