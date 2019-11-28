const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const connection = require('../db');


connection.connect(function(err){
    if(err) console.log(err);
    console.log('Bağlantı kuruldu!');
});



router.get('/add-product', function (req, res) {
    res.render('admin/add-product');
});

router.post('/add-product', function (req, res) {
    
    
    const name = req.body.name;
    const imgUrl = req.body.imageUrl;
    const catid = req.body.cat;
    console.log(name,imgUrl,catid);

    var sql = 'INSERT INTO products (name,imgUrl,catid) VALUES ' +
    "('" + name + "','" + imgUrl + "','" + catid + "')";
    console.log(sql);

           
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Kayıt Basarılı!');
    });

    switch(catid){
        case '1' :
            res.redirect('/ahsap-sandalye');
        case '2':
            res.redirect('/metal-sandalye');
        case '3':
            res.redirect('/bar-sandalye');  
        case '4':
            res.redirect('/plastik-sandalye');
        case '5':
            res.redirect('/klasik-sandalye');
        case '6':
            res.redirect('/restaurant-sandalye');  
        default :
            res.redirect('/admin/add-product');             
    }

});

module.exports = router;