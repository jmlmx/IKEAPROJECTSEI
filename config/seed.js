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
    {name: 'FÖRNUFTIG Pinball Machine', category: categories[0], price: 274.99},
    {name: 'GRILLSKÄR Pool Table', category: categories[0], price: 849.00},
    {name: 'DÄNKA Juke Box ', category: categories[0], price: 99.99},
    {name: 'PROPPMÄTT Paino', category: categories[0], price: 998.99},
    {name: 'LOBBÄK Chess Table', category: categories[0], price: 59.99},
    {name: 'MORABO Sofa', category: categories[1], price: 1349.00},
    {name: 'GRÅSALA Table/Chair Set', category: categories[1], price: 159.99},
    {name: 'BESTÅ TV Storage', category: categories[1], price: 1175.00},
    {name: 'JÄRVFJÄLLET Gaming Chair', category: categories[1], price: 369.99},
    {name: 'SMÅSTAD Child Toy Storage', category: categories[1], price: 99.99},
    {name: 'BJÖRKSTA Marble Scultpture', category: categories[2], price: 84.99},
    {name: 'BERÄKNA 6 Inch Vase', category: categories[2], price: 15.99},
    {name: 'LILJETRÄD Animal Figurine', category: categories[2], price: 14.99},
    {name: 'TÄTING Wooden Sailboat', category: categories[2], price: 24.99},
    {name: 'HEDERVÄRD Candle Holder', category: categories[2], price: 9.99},
    {name: 'SÄRKLASSIG Induction Cooktop', category: categories[3], price: 829.00},
    {name: 'VILLKORLIG Dishwasher', category: categories[3], price: 999.00},
    {name: 'STJÄRNSTATUS French Door Refrigerator', category: categories[3], price: 2699.00},
    {name: 'TÄNGBY Self-clean Wall Oven', category: categories[3], price: 1499.00},
    {name: 'GRILLSKÄR Air Fryer', category: categories[3], price: 149.00},
    {name: 'FÖRHÖJA Kitchen Island', category: categories[4], price: 179.98},
    {name: 'SEKTION Wall Cabinet', category: categories[4], price: 116.00},
    {name: 'SÄLJAN Wood Countertop', category: categories[4], price: 79.00},
    {name: 'BOVIGGEN Kitchen Sink', category: categories[4], price: 329.00},
    {name: 'ÄLMAREN Kitchen Faucet', category: categories[4], price: 129.00},
    {name: 'MYRBACKA Memory Foam Mattress', category: categories[5], price: 699.00},
    {name: 'LUNDTRAV Bed Pillow', category: categories[5], price: 24.99},
    {name: 'MALM Queen Bed Frame', category: categories[5], price: 349.00},
    {name: 'KULLEN 2 Drawer Night Stand', category: categories[5], price: 49.99},
    {name: 'ÄNGSLILJA Bed Bench', category: categories[5], price: 89.99},
    {name: 'RÄTTVIKEN Bathroom Sink', category: categories[6], price: 160.00},
    {name: 'GODMORGON Bamboo Bath Mat', category: categories[6], price: 24.99},
    {name: 'BROGRUND 5 Spray Shower Head', category: categories[6], price: 29.99},
    {name: 'RUNSKÄR Toilet with Bidet', category: categories[6], price: 499.00},
    {name: 'RÄGRUND Towel Bar', category: categories[6], price: 19.99},

    
  
  ]);

  console.log(items)

  process.exit();

})();