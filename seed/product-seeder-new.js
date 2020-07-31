var Product = require('../models/product');
var mongoose = require('mongoose');

//var app = express();
var config = require('../config.dev');

mongoose.connect(config.mongodb, {useUnifiedTopology: true, useNewUrlParser: true });
//mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
     imagePath: "../images/ArgenST.jpg",
    title : "Argen ST multilayer zirconia",
     description : "STML 98mm",
      price : 153,
     storedisplay: true,
     size: [14,16,20],
     color: ["A1", "A2", "A3", "B1", "B2", "C2", "D2", "OM1", "OM2"],
     category: 'Argen',
     category1: 11,
     category2: 13
     }),

    new Product({
     imagePath: "../images/ArgenST.jpg",
    title : "ArgenZ HT+ monochrome zirconia",
     description : "HT+ 98mm monochrome", 
      price : 145,
     storedisplay: true,
     size: [14,16,20],
     color: ["A1", "A2", "A3", "B1", "B2", "C2", "D2", "OM1", "OM2"],
     category: 'Argen',
     category1: 11,
     category2: 13
     }),

    new Product({
     imagePath: 'https://www.sagemax.com/app/uploads/2019/03/sagemax-nexxzr-multi-w98-16-a1_0019-min.jpg',
     title: 'Sagemax multilayer zirconia',
     description: 'Multilayer  98mm',
     storedisplay: true,
     price: 158,
     size: [16,20],
     color: ["A1", "A2", "A3", "B1", "B2", "C2", "D2"],
     category: 'Sagemax',
     category1: 11,
     category2: 13
    }),

     new Product({
        imagePath: '../images/IMG-SagemaxMT.jpg',
        title: 'Sagemax multilayer',
        description: 'Multilayer A3 95x16mm',
        fulldescr: '42% Translucency 1200 MPa',
        storedisplay: true,
        price: 158,
        size: [16,20],
        color: ["A1", "A2", "A3", "B1", "B2", "C2", "D2"],
        category: 'Ivoclar',
        category1: 11,
        category2: 15
    }),

    new Product({
        imagePath: 'https://www.sagemax.com/app/uploads/2019/03/sagemax-nexxzr-t-w98-16-a2_0010-min.jpg',
        title: 'Sagemax NexxZr T monochrome',
        description: 'NexxZr T monochrome  98mm',
        storedisplay: true,
        price: 120,
        size: [10,14,16,18,20],
        color: ["A1", "A2","A3","A3.5","B1","B2","B3","C1","C2","C3","D2","D3","OM1","OM2","OM3"],
        category: 'Sagemax',
        category1: 11,
        category2: 12        
    }),

     new Product({
        imagePath: 'https://www.sagemax.com/app/uploads/2019/03/sagemax-nexxzr-t-w98-16-a2_0010-min.jpg',
        title: 'Sagemax NexxZr T monochrome',
        description: 'NexxZr T monochrome  95mm',
        storedisplay: true,
        price: 125,
        size: [10,14,16,18,20],
        color: ["A1", "A2","A3","A3.5","B1","B2","B3","C1","C2","C3","D2","D3","OM1","OM2","OM3"],
        category: 'Sagemax',
        category1: 15,
        category2: 12
    }),

    new Product({
        imagePath: 'https://www.ivoclarvivadent.us/medias/sys_master/celum_assets/celum_assets/h42/hda/9611749654558/180404-jpg-3802-1600Wx1600H-400Wx350H.jpg',
        title: 'Ivoclar IPS e.max ZirCad multilayer',
        description: 'Multilayer  98mm',
        storedisplay: true,
        price: 205,
        size: [14,18],
        color: ["BL","A1", "A2", "A3", "B1", "B2", "C2", "D2"],
        category: 'Ivoclar',
        category1: 11,
        category2: 13
    }),
//    new Product({
//        imagePath: 'https://www.schuetz-dental.de/media/image/53/77/b2/220400_01.jpg',
//        title: 'Priridenta Priti®multidisc Zro2 Multicolor Translucent',
//        description: 'multilayer A3 98x14mm',
//        price: 190
//    }),
    new Product({
        imagePath: 'https://www.ivoclarvivadent.us/medias/sys_master/celum_assets/celum_assets/h42/hda/9611749654558/180404-jpg-3802-1600Wx1600H-400Wx350H.jpg',
        title: 'Ivoclar IPS e.max ZirCad multilayer',
        description: 'Multilayer  98mm',
        storedisplay: true,
        price: 205,
        size: [14,18],
        color: ["BL","A1", "A2", "A3", "B1", "B2", "C2", "D2"],
        category: 'Ivoclar',
        category1: 11,
        category2: 13
      }),
    new Product({
        imagePath: 'https://www.ivoclarvivadent.us/medias/sys_master/celum_assets/celum_assets/h42/hda/9611749654558/180404-jpg-3802-1600Wx1600H-400Wx350H.jpg',
        title: 'Ivoclar IPS e.max ZirCad multilayer',
        description: 'Multilayer  95mm',
        storedisplay: true,
        price: 205,
        size: [14,18],
        color: ["BL","A1", "A2", "A3", "B1", "B2", "C2", "D2"],
        category: 'Ivoclar',
        category1: 15,
        category2: 13
      }),
    
    new Product({
        imagePath: 'https://www.ivoclarvivadent.us/mam/celum/celum_assets/9583431778334_zircad-prime-groupShot.jpg?2',
        title: 'Ivoclar IPS e.max ZirCad Prime',
        description: 'Multilayer  98mm',
        storedisplay: true,
        price: 230,
        size: [14,18],
        color: ["BL","A1", "A2", "A3", "B1", "B2", "C2", "D2"],
        category: 'Ivoclar',
        category1: 15,
        category2: 13
      }),
 
    new Product({
        imagePath: '../images/KATANA-STML.jpg',
        title: 'Katana STML  zirconia',
        description: 'Multilayer 98mm',
        storedisplay: true,
        price: 145,
        size: [14,18,22],
        color: ["A1", "A2","A3","A3.5","B1","B2","B3","C1","C2","C3","D2","D3"],
        category: 'Katana',
        category1: 11,
        category2: 13
    }),

     new Product({
        imagePath: '../images/IMG-HT-Luminesse.jpg',
        title: 'Talladium HT zirconia',
        description: 'Translucent 98mm',
        storedisplay: true,
        price: 125,
        price: 145,
        size: [14,18,22],
        color: ["A1", "A2","A3","A3.5","B1","B2","B3","C1","C2","C3","D2","D3"],
        category: 'Talladium',
        category1: 11,
        category2: 12
    }),

    new Product({
        imagePath: '../images/IMG-HT-Luminesse.jpg',
        title: 'Talladium HT zirconia',
        description: 'Translucent 95mm',
        storedisplay: true,
        price: 125,
        price: 145,
        size: [14,18,22],
        color: ["A1", "A2","A3","A3.5","B1","B2","B3","C1","C2","C3","D2","D3"],
        category: 'Talladium',
        category1: 15,
        category2: 12
    }),
    new Product({
        imagePath: "https://s3.amazonaws.com/voxle.net/lmt/entity_pics/106675/thumb.jpg",
        title : 'Talladium One for All',
        description : "Translucent 98x14mm",
        fulldescr : "47% Translucency 1100 MPa",
        storedisplay: true,
        price : 100,
        size: [12,14,18,22],
        color: ["A1", "A2","A3","A3.5","B1","B2","B3","C1","C2","C3","D2","D3"],
        category : "Talladium",
        category1 : 11,
        "category2" : 12
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
