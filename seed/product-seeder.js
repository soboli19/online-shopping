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
   // new Product({
   //     imagePath: '../images/IMG-Ivoclar.Zircad.jpg',
   //     title: 'Formlabs фотополимерная смола Grey Resin',
   //     description: 'Formlabs фотополимерная смола Grey Resin FLGPGR04',
   //     fulldescr: 'КАРТРИДЖ FORMLABS GREY RESIN смола для SLA 3D принтера Formlabs Form поддерживает печать высокой точности: 25, 50 или 100 микрон.',
   //     storedisplay: true,
   //     price: 185,
   //     category: '3D',
   //     category1: 15,
   //     category2: 13
   // }),

   new Product({
        imagePath: '../images/webZircon-Brite.jpg',
        title: 'Harvest Speed Polish ',
        description: 'Speed Polish паста для полировки циркония и дисиликата лития 27g',
        fulldescr: 'Speed Polish паста для полировки циркония и дисиликата лития 27g',
        storedisplay: true,
        price: 138,
        category: '3D',
        category1: 15,
        category2: 13
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
