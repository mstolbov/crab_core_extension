import $ from 'jquery';
import notifyjs from 'notifyjs-browser';
notifyjs(null, $);

$.notify.addStyle('crab_core', {
  html:
    "<div class='notifyjs-container'>" +
    "  <div class='notifyjs-bootstrap-base notifyjs-bootstrap-success'>" +
    "    <div><span class='title' data-notify-html='title'/></div>" +
    "    <div><span class='message' data-notify-html='message'/></div>" +
    "  </div>" +
    "</div>"
});

chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
  if (!msg.score) { return false };

  if (msg.score.valid) {
    $.notify({
      title: 'This word is valid',
      message: `"${msg.score.word}" score: ${msg.score.score}`
    }, { style: 'crab_core' });
  } else {
    $.notify('Sorry, this word is not valid :(', 'info')
  }
});
