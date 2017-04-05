(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _scorer = require('./scorer');

var _scorer2 = _interopRequireDefault(_scorer);

var _notifier = require('./notifier');

var _notifier2 = _interopRequireDefault(_notifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scorer = new _scorer2.default({ host: 'https://crab-core.herokuapp.com' });

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  scorer.getScore(info.selectionText).then(function (score) {
    return _notifier2.default.notify(score);
  });
});

chrome.runtime.onInstalled.addListener(function () {
  var context = 'selection';
  var title = 'Score word';
  var id = 'score_word';
  chrome.contextMenus.create({ 'title': title, 'contexts': [context], 'id': id });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOGRmZWUyM2QuanMiXSwibmFtZXMiOlsic2NvcmVyIiwiaG9zdCIsImNocm9tZSIsImNvbnRleHRNZW51cyIsIm9uQ2xpY2tlZCIsImFkZExpc3RlbmVyIiwiaW5mbyIsInRhYiIsImdldFNjb3JlIiwic2VsZWN0aW9uVGV4dCIsInRoZW4iLCJub3RpZnkiLCJzY29yZSIsInJ1bnRpbWUiLCJvbkluc3RhbGxlZCIsImNvbnRleHQiLCJ0aXRsZSIsImlkIiwiY3JlYXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLFNBQVMscUJBQVcsRUFBQ0MsTUFBTSxpQ0FBUCxFQUFYLENBQWI7O0FBRUFDLE9BQU9DLFlBQVAsQ0FBb0JDLFNBQXBCLENBQThCQyxXQUE5QixDQUEwQyxVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUN2RFAsU0FBT1EsUUFBUCxDQUFnQkYsS0FBS0csYUFBckIsRUFDQ0MsSUFERCxDQUNNO0FBQUEsV0FBUyxtQkFBU0MsTUFBVCxDQUFnQkMsS0FBaEIsQ0FBVDtBQUFBLEdBRE47QUFFRCxDQUhEOztBQUtBVixPQUFPVyxPQUFQLENBQWVDLFdBQWYsQ0FBMkJULFdBQTNCLENBQXVDLFlBQU07QUFDM0MsTUFBSVUsVUFBVSxXQUFkO0FBQ0EsTUFBSUMsUUFBUSxZQUFaO0FBQ0EsTUFBSUMsS0FBSyxZQUFUO0FBQ0FmLFNBQU9DLFlBQVAsQ0FBb0JlLE1BQXBCLENBQTJCLEVBQUMsU0FBU0YsS0FBVixFQUFpQixZQUFXLENBQUNELE9BQUQsQ0FBNUIsRUFBdUMsTUFBTUUsRUFBN0MsRUFBM0I7QUFDRCxDQUxEIiwiZmlsZSI6ImZha2VfOGRmZWUyM2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NvcmVyIGZyb20gJy4vc2NvcmVyJztcbmltcG9ydCBOb3RpZmllciBmcm9tICcuL25vdGlmaWVyJztcblxubGV0IHNjb3JlciA9IG5ldyBTY29yZXIoe2hvc3Q6ICdodHRwczovL2NyYWItY29yZS5oZXJva3VhcHAuY29tJ30pO1xuXG5jaHJvbWUuY29udGV4dE1lbnVzLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcigoaW5mbywgdGFiKSA9PiB7XG4gIHNjb3Jlci5nZXRTY29yZShpbmZvLnNlbGVjdGlvblRleHQpXG4gIC50aGVuKHNjb3JlID0+IE5vdGlmaWVyLm5vdGlmeShzY29yZSkpO1xufSk7XG5cbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgbGV0IGNvbnRleHQgPSAnc2VsZWN0aW9uJztcbiAgbGV0IHRpdGxlID0gJ1Njb3JlIHdvcmQnO1xuICBsZXQgaWQgPSAnc2NvcmVfd29yZCc7XG4gIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHsndGl0bGUnOiB0aXRsZSwgJ2NvbnRleHRzJzpbY29udGV4dF0sICdpZCc6IGlkfSk7XG59KTtcbiJdfQ==
},{"./notifier":2,"./scorer":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import $ from 'jquery';
//import {} form 'notifyjs-browser';

var Notifier = function () {
  function Notifier() {
    _classCallCheck(this, Notifier);
  }

  _createClass(Notifier, [{
    key: 'notify',
    value: function notify(score) {
      var notification = void 0;
      if (score.valid) {
        notification = new Notification('This word is valid', {
          body: '"' + score.word + '" score: ' + score.score
        });
      } else {
        notification = new Notification('Sorry, this word is not valid :(');
      }
      setTimeout(function () {
        return notification.close();
      }, 5000);
    }
  }]);

  return Notifier;
}();

;
exports.default = new Notifier();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWVyLmpzIl0sIm5hbWVzIjpbIk5vdGlmaWVyIiwic2NvcmUiLCJub3RpZmljYXRpb24iLCJ2YWxpZCIsIk5vdGlmaWNhdGlvbiIsImJvZHkiLCJ3b3JkIiwic2V0VGltZW91dCIsImNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsUTs7Ozs7OzsyQkFDR0MsSyxFQUFPO0FBQ1osVUFBSUMscUJBQUo7QUFDQSxVQUFJRCxNQUFNRSxLQUFWLEVBQWlCO0FBQ2ZELHVCQUFlLElBQUlFLFlBQUosQ0FBaUIsb0JBQWpCLEVBQXVDO0FBQ3BEQyxzQkFBVUosTUFBTUssSUFBaEIsaUJBQWdDTCxNQUFNQTtBQURjLFNBQXZDLENBQWY7QUFHRCxPQUpELE1BSU87QUFDTEMsdUJBQWUsSUFBSUUsWUFBSixDQUFpQixrQ0FBakIsQ0FBZjtBQUNEO0FBQ0RHLGlCQUFXO0FBQUEsZUFBTUwsYUFBYU0sS0FBYixFQUFOO0FBQUEsT0FBWCxFQUF1QyxJQUF2QztBQUNEOzs7Ozs7QUFDRjtrQkFDYyxJQUFJUixRQUFKLEUiLCJmaWxlIjoibm90aWZpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vL2ltcG9ydCB7fSBmb3JtICdub3RpZnlqcy1icm93c2VyJztcblxuY2xhc3MgTm90aWZpZXIge1xuICBub3RpZnkoc2NvcmUpIHtcbiAgICBsZXQgbm90aWZpY2F0aW9uO1xuICAgIGlmIChzY29yZS52YWxpZCkge1xuICAgICAgbm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbignVGhpcyB3b3JkIGlzIHZhbGlkJywge1xuICAgICAgICBib2R5OiBgXCIke3Njb3JlLndvcmR9XCIgc2NvcmU6ICR7c2NvcmUuc2NvcmV9YFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbignU29ycnksIHRoaXMgd29yZCBpcyBub3QgdmFsaWQgOignKVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IG5vdGlmaWNhdGlvbi5jbG9zZSgpLCA1MDAwKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IG5ldyBOb3RpZmllcjtcbiJdfQ==
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scorer = function () {
  function Scorer(_ref) {
    var _ref$host = _ref.host,
        host = _ref$host === undefined ? "http://localhost" : _ref$host;

    _classCallCheck(this, Scorer);

    this.host = host;
  }

  _createClass(Scorer, [{
    key: "getScore",
    value: function getScore(word, callback) {
      return fetch(this.host + '/score/' + word).then(function (response) {
        return response.json();
      }).catch(console.error);
    }
  }]);

  return Scorer;
}();

exports.default = Scorer;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3Jlci5qcyJdLCJuYW1lcyI6WyJTY29yZXIiLCJob3N0Iiwid29yZCIsImNhbGxiYWNrIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUJBLE07QUFDbkIsd0JBQXVDO0FBQUEseUJBQTFCQyxJQUEwQjtBQUFBLFFBQTFCQSxJQUEwQiw2QkFBckIsa0JBQXFCOztBQUFBOztBQUNyQyxTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs2QkFFUUMsSSxFQUFNQyxRLEVBQVU7QUFDdkIsYUFBT0MsTUFBTSxLQUFLSCxJQUFMLEdBQVUsU0FBVixHQUFvQkMsSUFBMUIsRUFDTkcsSUFETSxDQUNEO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsT0FEQyxFQUVOQyxLQUZNLENBRUNDLFFBQVFDLEtBRlQsQ0FBUDtBQUdEOzs7Ozs7a0JBVGtCVixNO0FBVXBCIiwiZmlsZSI6InNjb3Jlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlciB7XG4gIGNvbnN0cnVjdG9yKHtob3N0PVwiaHR0cDovL2xvY2FsaG9zdFwifSkge1xuICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gIH1cblxuICBnZXRTY29yZSh3b3JkLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLmhvc3QrJy9zY29yZS8nK3dvcmQpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaCggY29uc29sZS5lcnJvciApO1xuICB9XG59O1xuIl19
},{}]},{},[1])