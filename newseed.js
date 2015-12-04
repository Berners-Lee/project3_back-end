
var models = require('./models');
var product = models.model('Product');

product.remove();
product.create({
    name: "Superman Bedding",
    price: "45.99",
    category: "Dorm",
    image: "https://secure.img2.wfrcdn.com/lf/47/hash/36248/15986129/1/Superman-Emblem-Bedding-Collection-CRVR1012.jpg",
    description: "It's a bird, it's a plane, it's Superman. The vivid designs and patterns almost bring the adventure to life with bold, bright colors. Not only does this sheet set feature an awesome design but the super-soft material makes it cuddly soft for bedtime comfort.",
    releaseDate: "2000-01-04"
  },
  {
    name: "Shower Caddy",
    price: "8.50",
    category: "Dorm",
    image: "http://cdn.hiconsumption.com/wp-content/uploads/2012/09/Suspended-Squid-Shower-Caddy.jpg",
    description: "Most of us face the problem of not having enough space throughout our household, bathroom included. Well the innovative Shower Squid is an adventurous way to maximize your small space in the bath tub or shower.",
    releaseDate: "2012-05-22"
  },
  {
    name: "Spiderman Pillow",
    price: "28.50",
    category: "Dorm",
    image: "http://shop.bigbazaardirect.com/sites/default/files/styles/vt_commerce_image_zoom/public/1000100086_qced_01.jpg?itok=KO3RvRNU",
    description: "Gift your child the most amazing and attractive Disney Spiderman Pillow and enhance the kids bedroom with something they love. The Disney Spiderman Pillow features external 100 percent cotton fabric and is stuffed with polyester fibre for maximum comfort to your child.",
    releaseDate: "2007-01-12"
  },
  {
    name: "Rubik's Cube Mini Fridge",
    price: "129.99",
    category: "Dorm",
    image: "http://www.thegreenhead.com/imgs/rubiks-cube-coldwarm-fridge-1.jpg",
    description: "The cool new yet definitely retro Rubik's Cube Fridge is a mini fridge that looks like the iconic puzzle cube from the 80s, except to solve this giant version, all you have to do is open the door and insert cans you want chilled or food you want to be kept warm, because it does both.",
    releaseDate: "2013-03-12"
  },
  {
    name: "Dog Lamp",
    price: "39.99",
    category: "Dorm",
    image: "http://www.startupandstory.com/wp-content/uploads/2015/05/dog_lamp.jpg",
    description: "Just like your little one, the Dog Lamp is bright and adorable. This lamp has a sturdy white metal base with a little green dog sporting red spots. Perfect for illuminating your child's room, this lamp is topped by a textured green tweed oval racetrack shade with rolled edge.",
    releaseDate: "2015-05-12"
  },
  {
    name: "Swivel Chair",
    price: "60.00",
    category: "Dorm",
    image: "http://st.hzcdn.com/simgs/52d1e5c60fb594d1_4-4677/modern-armchairs-and-accent-chairs.jpg",
    description: "The Cobble Chair has a great retro-inspired design and a shape that enables total relaxation. This modern chair features a leatherette body complemented by a chromed steel frame for a sleek and elegant look. ",
    releaseDate: "2012-11-10"
  },
  {
    name: "Backpack",
    price: "19.99",
    category: "School",
    image: "http://scene7.targetimg1.com/is/image/Target/16817455?wid=480&hei=480",
    description: "The Despicable Me One Minion in Overalls 16” Backpack is going to make your little ones go wild with desire. Imagine how excited they'll be taking their very own Minion from Despicable Me along wherever they go with this exciting backpack.",
    releaseDate: "2013-10-27"
  },
  {
    name: "Mechanical Pencils",
    price: "11.99",
    category: "School",
    image: "http://www.staples-3p.com/s7/is/image/Staples/s0903896_sc7?$splssku$",
    description: "Whether you’re taking notes or writing that first draft, a reliable pencil is always good to have on hand. With a range of traditional and mechanical options in several different price ranges and styles, it’s easy to find the option that works for you.",
    releaseDate: "1999-04-13"
  },
  {
    name: "Ramen Notebook",
    price: "3.99",
    category: "School",
    image: "http://rlv.zcache.com/happy_ramen_bowl_spiral_note_books-rd0590b4d86b1480f8823ee1a975a8394_ambg4_8byvr_324.jpg",
    description: "Organize your day with a custom notebook! Made with your images and text on the front cover, this notebook is a great way to show off your personal style and keep track of all important notes and appointments all at once.",
    releaseDate: "2001-03-14"
  },
  {
    name: "Apple Mac (Developer Edition)",
    price: "1299.99",
    category: "School",
    image: "http://images.amazon.com/images/G/01/software/detail-page/B001AMHWP8-1.jpg",
    description: "Everyone needs it, especially developers",
    releaseDate: "2012-07-21"
  },
  {
    name: "Ramen Noodles",
    price: "0.42",
    category: "Food",
    image: "http://media.timesreview.com.s3.amazonaws.com/riverheadnewsreview/files/Ramen.jpg",
    description: "Ramen Noodes are versatile. Ramen Noodles can be used as a main course or as an enhancing side dish. To do this, simply drain off the broth then add any variety of vegetables or your favorite meat before warming in a fraying pan or oven. Not only do Ramen Noodles make all kinds of exciting soups, but are excellent when used in salads.",
    releaseDate: "1989-08-20"
  },
  {
    name: "Emergen-C",
    price: "0.59",
    category: "Food",
    image: "http://s7.vitaminshoppe.com/is/image/VitaminShoppe/1301433_set?$PDPSKU$",
    description: "We’ve supercharged Emergen-C Immune+. Pow! Bam! The power-packed formula provides key nutrients your (super) body needs like vitamin C, vitamin D, zinc, and a proprietary complex with Wellmune WGP beta-glucans. And now available in sunshine-y, “Super” Orange deliciousness! Kapow!",
    releaseDate: "2001-12-25"
  },
  {
   name: "Easy Mac",
   price: "1.86",
   category: "Food",
   image: "http://ecx.images-amazon.com/images/I/71Aqra6JkWL._SL1227_.jpg (185KB)",
   description: "Consumers in the US are turning to Kraft Easy Mac cups for the great taste of macaroni and cheese. Easy Mac cups are simple to prepare – just add water and put in the microwave for a few minutes – plus they are portable with a disposable cup that makes clean-up easy. Easy Mac cups are perfect for any need-to-eat-now occasion.",
   releaseDate: "2008-11-05"
  },
  {
   name: "Sriracha Hot Chili Sauce",
   price: "6.99",
   category: "Food",
   image: "http://i.huffpost.com/gen/1004530/images/o-SRIRACHA-facebook.jpg (122KB)",
   description: "Sriracha is made from sun ripen chilies which are ground into a smooth paste along with garlic and packaged in a convenient squeeze bottle. It is excellent in soups, sauces, pastas, pizzas, hot dogs, hamburgers, chowmein or on anything else to give it a delicious, spicy taste.",
   releaseDate: "2007-09-26"
  },
  {
    name: "Can Jam",
    price: "29.99",
    category: "Fun",
    image: "https://www.admitsee.com/uploads/kan_jam.jpg",
    description: "If you’ve ever been to a country concert, you’ve seen people playing Kan Jam. Kan Jam involves two cans and a frisbee. The objective of the game is to throw the frisbee to your partner and hit the kan. If you throw the frisbee and it flies into the frisbee slot on the side of the kan you win!",
    releaseDate: "2010-11-02"
  },
  {
    name: "Beer Funnel",
    price: "15.00",
    category: "Fun",
    image: "http://www.piratemerch.com/assets/images/images/pirate_beer_bong.jpg",
    description: "A not-so widely known fact, is that Pirates are the inventors of the modern beer bong! Just fill up the dead man's head with your favorite brand of grog and prepare to make beer disappear! ",
    releaseDate: "2015-09-08"
  },
  {
    name: "Heavy Metal Guitar",
    price: "350.00",
    category: "Fun",
    image: "https://s-media-cache-ak0.pinimg.com/736x/30/2c/8b/302c8bba703890c73f135fe10fcf01a2.jpg",
    description: "Weapon for love. Time to rock!",
    releaseDate: "2011-11-11"
  },
  {
    name: "Skull Frisbee",
    price: "15.00",
    category: "Fun",
    image: "http://abcbilliardplus.com/ebay_images_2011/harley-davidson-skull-flying-disc-frisbee.jpg",
    description: "The Harley Davidson Skull Flying Frisbee Disc is a great gift idea for family and friends. Enjoy hours of fun playing this classic game. The best brand in motorcycles is now represented in this high-flying frisbee disc. ",
    releaseDate: "2014-04-14"
  }
);


