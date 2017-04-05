export default class Scorer {
  constructor({host="http://localhost"}) {
    this.host = host;
  }

  getScore(word, callback) {
    return fetch(this.host+'/score/'+word)
    .then(response => response.json())
    .catch( console.error );
  }
};
