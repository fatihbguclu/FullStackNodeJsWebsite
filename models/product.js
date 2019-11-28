
const connection = require('../db');


module.exports = class Product{

    constructor(name,imgurl,catid){
        this.name = name;
        this.imgurl = imgurl;
        this.catid = catid;
    }

    saveProduct(){
        products.push(this);
    }

    static getAhsap(){
        
       return connection.connect(function(err){
                var sql = "SELECT * FROM products WHERE catid = '2' ";
                connection.query(sql,function(err,rows,result){
                if(err) throw err;
                var ProductList = rows;
            });
        });
        
    }

    static getMetal(){
        return connection.execute("SELECT * FROM products WHERE catid = '2' ");
    }

    static getBar(){
        return connection.execute("SELECT * FROM products WHERE catid = '3' ");
    }

    static getPlastik(){
        return connection.execute("SELECT * FROM products WHERE catid = '4' ");
    }

    static getKlasik(){
        return connection.execute("SELECT * FROM products WHERE catid = '5' ");
    }

    static getRestaurant(){
        return connection.execute("SELECT * FROM products WHERE catid = '6' ");
    }
}
