import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/models/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  myProductsList: Array<IProduct> = [];
  myProduct: IProduct;
  myLiteratureList: Array<IProduct> =[];
  myClassicList: Array<IProduct> = [];
  myNovelList: Array<IProduct> = [];
  myOthersList: Array<IProduct> = [];
  selectedProduct: IProduct;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.filter();
  }

  filter() {
    this.productService.getProductsList().subscribe(data =>{
      this.myProductsList = data;
      //console.log(this.myProductsList);
      for ( this.myProduct of this.myProductsList) {
        //console.log(this.myProduct);
        switch (this.myProduct.category) {
          case 'Literatura':
          //console.log(this.myProduct.category);
              this.myLiteratureList.push(this.myProduct);
              //console.log(this.myLiteratureList);
            break;
          case 'Clasicos':
              this.myClassicList.push(this.myProduct);
              //console.log(this.myClassicList);
            break;
          case 'Novela':
              this.myNovelList.push(this.myProduct);
              //console.log(this.myNovelList);
            break;
          default:
              this.myOthersList.push(this.myProduct);
              //console.log(this.myOthersList);
            break;
        }
      }
    });
  }

  onSelect(product: IProduct): void {
    console.log(product);
    this.selectedProduct = product;
    this.gotoDetail(product);
  }

  gotoDetail(product) {
    localStorage.setItem('producto', JSON.stringify(product));
    console.log(localStorage);
    this.router.navigate(['/main/detailsp']);
  }

  // SelectedProduct(product){
  //   this.SelectedProduct = product;
  // }
}
/*this.productService.getProductsList().subscribe(data =>{
      this.myProductsList = data;
      console.log(this.myProductsList);
      for (this.myProduct of this.myProductsList) {
        console.log(this.myProduct);
      if (this.myProduct.category == 'Literatura'){
        this.myLiteratureList[this.x]= this.myProduct;
        this.x++;
        console.log(this.myLiteratureList);
      }else if (this.myProduct.category == 'Clásicos'){
        this.myClassicList[this.y]= this.myProduct;
        this.y++;
            }else if (this.myProduct.category == 'Novela'){
              this.myNovelList[this.z]= this.myProduct;
              this.z++;
      } else { 
        this.myOthersList[this.w]= this.myProduct;
        this.w++;
        }
        console.log(this.myClassicList);
        console.log(this.myLiteratureList);
      }
    })*/

/*
filter() {
    this.productService.getProductsList().subscribe(data =>{
      this.myProductsList = data;
      //console.log(this.myProductsList);
      for ( this.myProduct of this.myProductsList) {
        //console.log(this.myProduct);
        switch (this.myProduct.category) {
          case 'Literatura':
          //console.log(this.myProduct.category);
              this.myLiteratureList[this.x]= this.myProduct;
              this.x++;
              console.log(this.myLiteratureList);
            break;
          case 'Clasico':
              this.myClassicList[this.y]= this.myProduct;
              this.y++;
              console.log(this.y);
            break;
          case 'Novela':
              this.myNovelList[this.z]= this.myProduct;
              this.z++;
            break;
          default:
              /*this.myOthersList[this.w]= this.myProduct;
              this.w++;
              break;
            }
          }
        });
      }
      */