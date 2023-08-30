require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Entertainment', sortOrder: 10},
    {name: 'Furniture', sortOrder: 20},
    {name: 'Home Decor', sortOrder: 30},
    {name: 'Appliances', sortOrder: 40},
    {name: 'Kitchen', sortOrder: 50},
    {name: 'Bedroom', sortOrder: 60},
    {name: 'Bathroom', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'FÖRNUFTIG Pinball Machine', emojiURL: '', category: categories[0], price: 274.99, rating: 9/10},
    {name: 'GRILLSKÄR Pool Table', emojiURL: '', category: categories[0], price: 849.00, },
    {name: 'DÄNKA Juke Box ', emojiURL: '', category: categories[0], price: 99.99},
    {name: 'PROPPMÄTT Paino', emojiURL: '', category: categories[0], price: 998.99},
    {name: 'LOBBÄK Chess Table', emojiURL: '', category: categories[0], price: 59.99},
    {name: 'MORABO Sofa', emojiURL: '',  category: categories[1], price: 1349.00},
    {name: 'GRÅSALA Table/Chair Set', emojiURL: '', category: categories[1], price: 159.99},
    {name: 'BESTÅ TV Storage', emojiURL: '', category: categories[1], price: 1175.00},
    {name: 'JÄRVFJÄLLET Gaming Chair', emojiURL: '', category: categories[1], price: 369.99},
    {name: 'SMÅSTAD Child Toy Storage', emojiURL: '', category: categories[1], price: 99.99},
    {name: 'BJÖRKSTA Marble Scultpture', emojiURL: '', category: categories[2], price: 84.99},
    {name: 'BERÄKNA 6 Inch Vase', emojiURL: '', category: categories[2], price: 15.99},
    {name: 'LILJETRÄD Animal Figurine', emojiURL: '', category: categories[2], price: 14.99},
    {name: 'TÄTING Wooden Sailboat', emojiURL: '', category: categories[2], price: 24.99},
    {name: 'HEDERVÄRD Candle Holder', emojiURL: '', category: categories[2], price: 9.99},
    {name: 'SÄRKLASSIG Induction Cooktop', emojiURL: '', category: categories[3], price: 829.00},
    {name: 'VILLKORLIG Dishwasher', emojiURL: '', category: categories[3], price: 999.00},
    {name: 'STJÄRNSTATUS French Door Refrigerator', emojiURL: '', category: categories[3], price: 2699.00},
    {name: 'TÄNGBY Self-clean Wall Oven', emojiURL: '', category: categories[3], price: 1499.00},
    {name: 'GRILLSKÄR Air Fryer', emojiURL: '', category: categories[3], price: 149.00},
    {name: 'FÖRHÖJA Kitchen Island', emojiURL: '', category: categories[4], price: 179.98},
    {name: 'SEKTION Wall Cabinet', emojiURL: '', category: categories[4], price: 116.00},
    {name: 'SÄLJAN Wood Countertop', emojiURL: '', category: categories[4], price: 79.00},
    {name: 'BOVIGGEN Kitchen Sink', emojiURL: '', category: categories[4], price: 329.00},
    {name: 'ÄLMAREN Kitchen Faucet', emojiURL: '', category: categories[4], price: 129.00},
    {name: 'MYRBACKA Memory Foam Mattress', emojiURL: '', category: categories[5], price: 699.00},
    {name: 'LUNDTRAV Bed Pillow', emojiURL: '', category: categories[5], price: 24.99},
    {name: 'MALM Queen Bed Frame', emojiURL: '', category: categories[5], price: 349.00},
    {name: 'KULLEN 2 Drawer Night Stand', emojiURL: '', category: categories[5], price: 49.99},
    {name: 'ÄNGSLILJA Bed Bench', emojiURL: '', category: categories[5], price: 89.99},
    {name: 'RÄTTVIKEN Bathroom Sink', emojiURL: '', category: categories[6], price: 160.00},
    {name: 'GODMORGON Bamboo Bath Mat', emojiURL: '', category: categories[6], price: 24.99},
    {name: 'BROGRUND 5 Spray Shower Head', emojiURL: '', category: categories[6], price: 29.99},
    {name: 'RUNSKÄR Toilet with Bidet', emojiURL: '', category: categories[6], price: 499.00},
    {name: 'RÄGRUND Towel Bar', emojiURL: '', category: categories[6], price: 19.99},

    
  
  ]);

  console.log(items)

  process.exit();

})();
