// Get Initial Load “/api/product_details” = {
//   productName: String,
  // producer: String,
  // answeredQuestions: Number
  // numberOfRatings: Number,
  // Stars: Number,
  // Star percentages: {
  //   one: Number,
  //   two: Number,
  //   three: Number,
  //   four: Number,
  //   five: Number
  // }
//   price: Number,
//   inStock: Boolean,
//   productInfo: String,
// }


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/items');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection is open');
});

let itemDetailsSchema = new mongoose.Schema({
  productName: String,
  producer: String,
  answeredQuestions: Number,
  numberOfRatings: Number,
  starPercentages: {
    one: Number,
    two: Number,
    three: Number,
    four: Number,
    five: Number
  },
  price: Number,
  inStock: Boolean,
  productInfo: []
});

let Item = mongoose.model('Item', itemDetailsSchema);

module.exports = Item;