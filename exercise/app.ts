import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;

//tüm kayıtlar
result = _productService.getProducts();
//

//id'ye göre bir kayıt
result = _productService.getById(2);
//

//ürün ekleme
// let p = new Product();

// p.name = "IPhone 6";
// p.category = "Telefon";
// p.price = 12000;

// _productService.saveProduct(p);
// result = _productService.getProducts();
//

//ürün silme
//result = _productService.getById(2);
//_productService.deleteProduct(result);
//result = _productService.getProducts();

//ürün güncelleme
let p1 = new Product();

p1.id = 2;
p1.name = "IPhone 8";
p1.category = "Telefon";
p1.price = 10000;

result = _productService.saveProduct(p1);
result = _productService.getProducts();

console.log(result);
