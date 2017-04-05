import $ from 'jquery';
//import {} form 'notifyjs-browser';

class Notifier {
  notify(score) {
    let notification;
    if (score.valid) {
      notification = new Notification('This word is valid', {
        body: `"${score.word}" score: ${score.score}`
      })
    } else {
      notification = new Notification('Sorry, this word is not valid :(')
    }
    setTimeout(() => notification.close(), 5000);
  }
};
export default new Notifier;
