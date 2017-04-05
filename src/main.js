import Scorer from './scorer';

let scorer = new Scorer({host: 'https://crab-core.herokuapp.com'});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  scorer.getScore(info.selectionText)
  .then(score => chrome.tabs.sendMessage(tab.id, {score: score}));
});

chrome.runtime.onInstalled.addListener(() => {
  let context = 'selection';
  let title = 'Score word';
  let id = 'score_word';
  chrome.contextMenus.create({'title': title, 'contexts':[context], 'id': id});
});
