const Item = require('./database');

let getAllDocuments = (callback) => {
  Item.find((err, item) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, item);
    }
  });
}

module.exports = getAllDocuments;