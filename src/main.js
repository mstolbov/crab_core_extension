import Scorer from './scorer';
import Notifier from './notifier';

let scorer = new Scorer({host: 'https://crab-core.herokuapp.com'});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  scorer.getScore(info.selectionText)
  .then(score => Notifier.notify(score));
});

chrome.runtime.onInstalled.addListener(() => {
  let context = 'selection';
  let title = 'Score word';
  let id = 'score_word';
  chrome.contextMenus.create({'title': title, 'contexts':[context], 'id': id});
});
