import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  // products: Product[];
  products: any;
  product: Product;
  prodId: String;
  prodName: String;
  price: String;
  indes:number;
  _id:any;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      console.log('Product Component -> ngOnInit -> products', products);

      this.products = products;
    });
  }

    addProduct() {
        const newProduct = {
            prodId: this.prodId,
            prodName: this.prodName,
            price: this.price,
        };
        this.productsService.addProduct(newProduct).subscribe((product) => {
            console.log(' addProduct -> product : ', product);

            // this.products.push(product); // add new product to last index

            // or

            this.products.splice(0, 0, product); // add new product to first index

            // or

            // this.products = product; // if all records

            // or

            // this.productsService.getProducts().subscribe((products) => {
            //   console.log('products - ', products);

            //   this.products = products;
            // });

            this.prodId = '';
            this.prodName = '';
            this.price = '';
        });
    }

    deleteProduct(product) {
        // var products = this.products;
        this.productsService.deleteProduct(product._id).subscribe((data) => {
            console.log(' data', data);
            console.log('_id : ' + product._id);
            var index = this.products.indexOf(product);

            console.log('deleteProduct -> index  =', index);

            this.products.splice(index, 1);
        });
    }
}
