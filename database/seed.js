const Item = require('./database.js');
const faker = require('faker');

Item.deleteMany()

for (let i = 0; i < 100; i++) {
  let fives = Math.floor(Math.random() * 100);
  let fours = Math.floor(Math.random() * 100);
  let threes = Math.floor(Math.random() * 100);
  let twos = Math.floor(Math.random() * 100);
  let ones = Math.floor(Math.random() * 100);
  let ratingsTotal = ones + twos + threes + fours + fives;
  let productInfo = [];
  for (let j = 0 ; j < Math.floor(Math.random() * 10) + 1; j++) {
    let detail = Math.random();
    if (detail > 0 && detail <= 1/3) {
      productInfo.push(faker.lorem.sentence());
    } else if (detail > 1/3 && detail <= 2/3) {
      productInfo.push(faker.lorem.paragraph());
    } else if (detail > 2/3 && detail <= 1) {
      productInfo.push(faker.lorem.paragraphs());
    }
  }
  let item = new Item({
    id: i,
    productName: faker.commerce.productName(),
    producer: faker.company.companyName(),
    answeredQuestions: Math.floor(Math.random() * 100),
    numberOfRatings: ratingsTotal,
    starPercentages: {
      one: ones / ratingsTotal,
      two: twos / ratingsTotal,
      three: threes / ratingsTotal,
      four: fours / ratingsTotal,
      five: fives / ratingsTotal
    },
    price: (10000* Math.random()).toFixed(2),
    inStock: Math.random() > .5,
    productInfo: productInfo
  });
  item.save();
}

Item.find((err, item) => {
  if (err) {
    console.log(err);
  } else {
    console.log(item);
  }
})
