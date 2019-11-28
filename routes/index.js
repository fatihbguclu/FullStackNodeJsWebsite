const express = require('express');
const router = express.Router();
const Product = require('../models/product');

const connection = require('../db');

router.get('/', function (req, res) {
    res.render('index');
});

router.get('/about', function (req, res) {
    res.render('about');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});

router.get('/galeri', function (req, res) {
    res.render('gallery');
});

router.get('/urun-gruplari', function (req, res) {
    res.redirect('/ahsap-sandalye')
});

router.get('/ahsap-sandalye', function (req, res) {

    connection.connect(function (err) {
        var sql = "SELECT * FROM products WHERE catid = '1' ";
        connection.query(sql, function (err, rows, result) {
            if (err) console.log(err);
            const products = rows;
            res.render('ahsap', {
                title: 'Ahşap Sandalyeler',
                products: products,
                path: '/ahsap-sandalye',
                imgPath: 'images/ahsap'
            })
        });
    });

});

router.get('/metal-sandalye', function (req, res) {
    connection.connect(function (err) {
        var sql = "SELECT * FROM products WHERE catid = '2' ";
        connection.query(sql, function (err, rows) {
            if (err) throw err;
            const products = rows;

            res.render('metal', {
                title: 'Metal Sandalyeler',
                products: products,
                path: '/metal-sandalye',
                imgPath: 'images/metal'
            });

        });
    });


});

router.get('/bar-sandalye', function (req, res) {

    connection.connect(function (err) {
        var sql = "SELECT * FROM products WHERE catid = '3' ";
        connection.query(sql, function (err, rows) {
            if (err) throw err;
            const products = rows;

            res.render('bar', {
                title: 'Bar Sandalyeleri',
                products: products,
                path: '/bar-sandalye',
                imgPath: 'images/bar'
            });

        });
    });


});

router.get('/plastik-sandalye', function (req, res) {

    connection.connect(function (err) {
        var sql = "SELECT * FROM products WHERE catid = '4' ";
        connection.query(sql, function (err, rows) {
            if (err) throw err;
            const products = rows;

            res.render('plastik', {
                title: 'Plastik Sandalyeler',
                products: products,
                path: '/plastik-sandalye',
                imgPath: 'images/plastik'
            });

        });
    });


});

router.get('/klasik-sandalye', function (req, res) {

    connection.connect(function (err) {
        var sql = "SELECT * FROM products WHERE catid = '5' ";
        connection.query(sql, function (err, rows) {
            if (err) throw err;
            const products = rows;

            res.render('klasik', {
                title: 'Klasik Sandalyeler',
                products: products,
                path: '/klasik-sandalye',
                imgPath: 'images/klasik'
            });

        });
    });



});

router.get('/restaurant-sandalye', function (req, res) {

    connection.connect(function (err) {
        var sql = "SELECT * FROM products WHERE catid = '6' ";
        connection.query(sql, function (err, rows) {
            if (err) throw err;
            const products = rows;

            res.render('restaurant', {
                title: 'Restaurant Sandalyeleri',
                products: products,
                path: '/restaurant-sandalye',
                imgPath: 'images/restaurant'
            });

        });
    });


});




module.exports = router;
