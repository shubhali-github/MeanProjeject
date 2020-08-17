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
      this.products.push(product);
      this.productsService
        .getProducts()
        .subscribe((products) => (this.products = products));
    });
  }
}
