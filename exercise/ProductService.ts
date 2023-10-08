import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService
{
    private dataSource: SimpleDataSource;
    private products: Array<Product>;

    constructor() {
        this.dataSource = new SimpleDataSource;
        this.products = new Array<Product>;
        this.dataSource.getProducts().forEach(p=>this.products.push(p));
    }
    getById(id: number): Product {
        return this.products.filter(p=>p.id===id)[0];
    }
    getProducts(): Product[] {
       return this.products;
    }
    saveProduct(product: Product): void {
        if (product.id == 0 || product.id == null)
        {
            product.id = this.generateId();
            this.products.push(product);
        }
        else 
        {
            let index;
            for (let i=0; i<this.products.length; i++){ //burda bize değiştirilen eleman bilgileri geliyor. dolayısıyla tüm listeyi dolaşarak id'ye göre ilgili kaydın index numarasını alıyoruz.
                if (this.products[i].id === product.id)
                    index = i;
            }
            this.products.splice(index,1,product); //bulduğumuz index'teki elemanı silip yeni elemanı aynı indexe ekliyor.
        }
    }
    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product);
        this.products.splice(index,1);
    }

    //1'den başlayarak olmayan id'yi döndürüyor.
    private generateId(): number {
        let key = 1;

        while (this.getById(key) != null) {
            key++;
        }

        return key;
    }
    
}