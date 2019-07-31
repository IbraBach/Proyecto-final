import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ButtonRenderComponent } from '../butto.render.component/butto.render.component';
import { DetailspComponent } from 'src/app/main/detailsp/detailsp.component';

@Component({
  selector: 'app-productsList',
  templateUrl: './productsList.component.html',
  styleUrls: ['./productsList.component.scss']
})
export class ProductsListComponent implements OnInit {

  selectedProduct: IProduct;
  selProduct: IProduct;
  

  settings = {
    mode : 'inline',
    confirmSave: 'true',
    actions: {
      add: false,
     // ver: true,
      },
    edit: {
      confirmSave: true,
    },
    delete: {
      /*deleteButtonContent: '<i class="nb-trash"></i>',*/
      confirmDelete: true,
    },
    columns: {
      imageUrl: {
        title: 'Portada',
        type: 'html',
        valuePrepareFunction:  (imageUrl:string) => {
          return `<img width="50px" src="${imageUrl}"/>`;
        },
      },
      productName: {
        title: 'Libro'
      },
      author: {
        title: 'Autor'
      },
      publicationYear: {
        title: 'Año'
      },
      price: {
        title: 'Precio'
      },
      category: {
        title: 'Categoría'
      },
      button: {
        title: 'Ver detalles',
        type: 'custom',
        renderComponent: ButtonRenderComponent,
      }
    }
  };
  
  myProducts:Array<IProduct>;
  productSelected: IProduct;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProductsList();
  }

  getProductsList() {
    this.productService.getProductsList().subscribe(data => {
      this.myProducts = data;
    })
  }

  deleteProduct(product){
    console.log(product);
    this.productService.deleteProduct(product.data.productId).subscribe (data => {
      this.getProductsList();
    });
  }

  setProductSelected(productItem){
    console.log(productItem)
    console.log(productItem.data.productId);
    this.productService.getProductById(productItem.data.productId).subscribe(data => {
      //console.log(data);
      this.productSelected = data;
      console.log(this.productSelected);
      this.onSelect(this.productSelected);
    })
  }

  updateProduct(product){
    console.log(product.newData);
    this.productService.updateProduct(product.newData).subscribe (data => {
      this.myProducts=data
      //this.getProductsList();
    });
  }

  /*gotodetails(id){
    console.log(id);
    this.productService.getProductById(id).subscribe(data => {
      //console.log(data);
      this.productSelected = data;
    })
    
  }*/

  onSelect(product: IProduct) {
    console.log(product);
    this.selectedProduct = product;
    //let a = this.productService.gotoDetail(product);
    //console.log(a);
    
    this.router.navigate(['/main/detailsp']);
    //DetailspComponent.displayData(this.selectedProduct);
  }

  createProduct(objeto){
    console.log(objeto);
    let evento=objeto;
    let product = objeto.newData;
    //delete product.productId;
    console.log(product);
    this.productService.createProduct(product).subscribe(data=>{
      console.log(data);
      evento.confirm.resolve(data);
    });
  }
  rowSelected(row){
    console.log(row.data);
  }

}
