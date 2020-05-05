const Item = require('./database');

let getAllDocuments = (itemId, callback) => {
  Item.find({id: itemId}, (err, item) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, item);
    }
  });
}

module.exports = getAllDocuments;
