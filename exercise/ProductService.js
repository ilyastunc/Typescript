"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource;
        this.products = new Array;
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) { //burda bize değiştirilen eleman bilgileri geliyor. dolayısıyla tüm listeyi dolaşarak id'ye göre ilgili kaydın index numarasını alıyoruz.
                if (this.products[i].id === product.id)
                    index = i;
            }
            this.products.splice(index, 1, product); //bulduğumuz index'teki elemanı silip yeni elemanı aynı indexe ekliyor.
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
    };
    //1'den başlayarak olmayan id'yi döndürüyor.
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
