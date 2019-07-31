import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/models/iproduct';
import { Router } from '@angular/router';



@Component({
  template: `
    <button mat-raised-button color="primary" (userRowSelect)="onSelect($event)">Ver detalles</button>
`
})
export class ButtonRenderComponent implements OnInit {

  product:Array<IProduct>;
  selectedProduct: IProduct;

  public renderValue;

  @Input() value;

  constructor(private productService: ProductService, private router: Router) {  }

  ngOnInit() {
    this.renderValue = this.value;
  }

  onSelect(product: IProduct) {
    console.log(product);
    this.selectedProduct = product;
    let a = this.productService.gotoDetail(product);
    console.log(a);
    this.router.navigate(['/msin/detailsp', this.selectedProduct.productId]);
  }

  // gotodetails(id){
  //   console.log(id);
  //   this.productService.getProductById(id).subscribe(data => {
  //     console.log(data);
  //     this.product = data;
  //   })
  // }

}