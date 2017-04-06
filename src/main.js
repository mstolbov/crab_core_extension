import Scorer from './scorer';

let scorer = new Scorer({host: 'https://crab-core.herokuapp.com'});
let storage = chrome.storage.local;

let injectTab = (tab) => {
  return new Promise((resolve, reject) => {
    storage.get(`${tab.id}`, (item) => {
      if (item[tab.id]) {
        resolve();
      } else {
        storage.set({[tab.id]: true});
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

chrome.tabs.onRemoved.addListener((tab, info) => {
  storage.remove(`${tab.id}`);
});
