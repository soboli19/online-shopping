var Product = require('../models/product');
var mongoose = require('mongoose');

//var app = express();
var config = require('../config.dev');

mongoose.connect(config.mongodb, {useUnifiedTopology: true, useNewUrlParser: true });
//mongoose.connect('localhost:27017/shopping');

var products = [
   // new Product({
   //  imagePath: '../images/IMG-SagemaxMT.jpg',
   //  title: 'Sagemax multilayer zirconia',
   //  description: 'multilayer A3 98x16mm',
   //  price: 160
   // }),
   // new Product({
   //     imagePath: '../images/zr-collection.jpg',
   //     title: 'Sagemax monochrome zirconia',
   //     description: 'multilayer A3 98x16mm',
   //     price: 197
   // }),
   // new Product({
   //     imagePath: 'https://www.sagemax.com/app/uploads/2019/03/sagemax-nexxzr-t-w98-16-a2_0010-min.jpg',
   //     title: 'Sagemax monochrome zirconia',
   //     description: 'NexxZr T monochrome A3 98x16mm',
   //     price: 135
   // }), 
   // new Product({
   //     imagePath: 'https://www.schuetz-dental.de/media/image/53/77/b2/220400_01.jpg',
   //     title: 'Priridenta Priti®multidisc Zro2 Multicolor Translucent',
   //     description: 'multilayer A3 98x14mm',
   //     price: 190
   // }),
   // new Product({
   //     imagePath: '../images/IMG-HT-Luminesse.jpg',
   //     title: 'Talladium HT zirconia',
   //     description: 'Translucent 98x14mm',
   //     price: 115
   // }),
//    new Product({
//        imagePath: '../images/Stick-IT.jpg',
//        title: 'Talladium STICK-IT',
//        description: 'паста рефрактор для изготовления подставок для обжига керамики',
//        fulldescr: 'STICK-IT паста рефрактор для из готовления подставок для обжига керамики  лучше чем "термовата шприц 12ml"',
//        storedisplay: true,
//        price: 9,
//        category: 13
//    }),
    new Product({
        imagePath: '../images/product-seeder-bck.js',
        title: 'DVA Zirсon-Brite polish paste 20g',
        description: 'Zircon-Brite паста полировочная 20г цирконий, e.max и Empress керамика',
        fulldescr: 'Zircon-Brite паста полировочная 20г цирконий, e.max и Empress керамика. Исключает необходимость повторного глазурования реставраций после коррекции',
        storedisplay: true,
        price: 49,
        category: 'misc',
        category1: 20,
        category2: 20,
        storedisplay: 'true' 
        
    })

];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
      done ++;
      if (done === products.length) {
          exit();
        }  
    });
}

function exit() {
    mongoose.disconnect();
}
