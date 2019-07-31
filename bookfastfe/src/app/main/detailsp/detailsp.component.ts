import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsListComponent} from 'src/app/main/productsList/productsList.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detailsp',
  templateUrl: './detailsp.component.html',
  styleUrls: ['./detailsp.component.scss']
})
export class DetailspComponent implements OnInit, OnChanges {

  

  myProduct: IProduct;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    //this.productService.getProductById(productService.productId).subscribe(hero => (this.productSelected = productSelected));
  this.ngOnChanges();
  }
  ngOnChanges(){
    console.log(localStorage.getItem('producto'));
    this.myProduct=JSON.parse(localStorage.getItem('producto'));
  }
}
