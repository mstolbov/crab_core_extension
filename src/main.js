import Scorer from './scorer';

let scorer = new Scorer({host: 'https://crab-core.herokuapp.com'});

let injectTab = (tab) => {
  return new Promise((resolve, reject) => {
    chrome.tabs.executeScript(tab.id, {code: "window.scorerInjected"}, (result) => {
      if (result[0]) {
        resolve();
      } else {
        chrome.tabs.executeScript(tab.id, {code: "window.scorerInjected = true"});
        if (tab.url.match(/^(http|https):/i)) {
          chrome.tabs.executeScript(tab.id, {file: "content-min.js"}, () => {
            resolve();
          });
        }
      }
    });
  });
};

chrome.contextMenus.onClicked.addListener((info, tab) => {
  injectTab(tab)
  .then(() => scorer.getScore(info.selectionText))
  .then(score => chrome.tabs.sendMessage(tab.id, {score: score}));
});

chrome.runtime.onInstalled.addListener(() => {
  let options = {
    contexts: ['selection'],
    title: 'Score word',
    id: 'score_word'
  };
  chrome.contextMenus.create(options);
});
