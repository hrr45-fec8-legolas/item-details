const Item = require('./database.js');
const faker = require('faker');

Item.deleteMany()

for (let i = 0; i < 1; i++) {
  let fives = Math.random() / 5;
  console.log(fives)
  let fours = Math.random() / 5;
  let threes = Math.random() / 5;
  let twos = Math.random() / 5;
  let ones = 1 - fives - fours - threes - twos;
  let productInfo = [];
  for (let i = 0 ; i < Math.floor(Math.random() * 10) + 1; i++) {
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
    productName: faker.commerce.productName(),
    producer: faker.company.companyName(),
    answeredQuestions: Math.floor(Math.random() * 100),
    numberOfRatings: Math.floor(Math.random() * 100),
    starPercentages: {
      one: ones,
      two: twos,
      three: threes,
      four: fours,
      five: fives
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