
var models = require('./models');
var product = models.model('Product');

product.remove({});
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
    name: "Backpack",
    price: "19.99",
    category: "School",
    image: "http://scene7.targetimg1.com/is/image/Target/16817455?wid=480&hei=480",
    description: "The Despicable Me One Minion in Overalls 16” Backpack is going to make your little ones go wild with desire. Imagine how excited they'll be taking their very own Minion from Despicable Me along wherever they go with this exciting backpack. You'll love the durable construction with enough space for favorite toys, books and even overnight supplies for a visit with friends or family. They'll be the envy of the playground with this Despicable Me backpack.",
    releaseDate: "2013-10-27"
  },
  {
    name: "Mechanical Pencils",
    price: "11.99",
    category: "School",
    image: "http://www.staples-3p.com/s7/is/image/Staples/s0903896_sc7?$splssku$",
    description: "Whether you’re taking notes or writing that first draft, a reliable pencil is always good to have on hand. With a range of traditional and mechanical options in several different price ranges and styles, it’s easy to find the option that works for you. Pencils enable you to work on accounting projects, draw, or complete classroom activities without having to deal with permanent mistakes. You can choose from wooden pencils or mechanical pencils to suit your needs. Lead refills and sharpeners ensure you can always use your pencils, and erasers make removing mistakes simple.",
    releaseDate: "1999-04-13"
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
  }
);


