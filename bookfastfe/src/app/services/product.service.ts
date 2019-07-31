import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) { }

  myProducts: IProduct;


  private urlProductsList = "http://localhost:3000/products/list";
  private urlProductsCreate = "http://localhost:3000/products/create";
  private urlProductsDelete = "http://localhost:3000/products/delete/";
  private urlProductsUpdate = "http://localhost:3000/products/update/";
  private urlProductsId = "http://localhost:3000/products/";
  private urlProduct = '';

  getProductsList():Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.urlProductsList,{headers: headers})
  }

  createProduct(product):Observable<any> {
    const headers = new HttpHeaders();
    product.price = parseFloat(product.price);
    product.publicationYear = parseInt(product.publicationYear, 10);
    product.starRating = parseFloat(product.starRating);
    headers.set('Content-Type','application/json; charset=utf-8');
    return this.httpClient.post(this.urlProductsCreate,product,{headers:headers})
  }
  
  updateProduct(product): Observable<any> {
    console.log(product.price);
    const headers = new HttpHeaders();
    headers.set('Content-Type','application/json; charset=utf-8');
    product.price = parseFloat(product.price);
    product.publicationYear = parseInt(product.publicationYear, 10);
    product.starRating = parseFloat(product.starRating);
    this.urlProduct = this.urlProductsUpdate+product.productId;
    console.log(product);
    return this.httpClient.patch(this.urlProduct, product,  {headers:headers});
  }

  deleteProduct(id){
    console.log(id);
    const headers = new HttpHeaders();
    headers.set('Content-Type','application/json; charset=utf-8');
    this.urlProduct = this.urlProductsDelete+id;
    return this.httpClient.delete(this.urlProduct, {headers:headers});
  }

  getProductById(product):Observable<any>{
    //let paramId = new HttpParams().set('productId', '');
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log(product);
    this.urlProduct = this.urlProductsId + product.productId;
    return this.httpClient.get(this.urlProduct, {headers: headers});
  }

  setUserItemSelected(product):Observable<any>{
    const headers = new HttpHeaders;
    headers.set('Content-Type','application/json');
    this.urlProduct=this.urlProduct + product.newData.id;
    console.log(this.urlProduct);
    console.log(product.newData);
    return this.httpClient.patch(this.urlProduct,product.newData, {headers:headers});
  }

  gotoDetail(product):Observable<any> {
    console.log(product);
    const headers = new HttpHeaders;
    headers.set('Content-Type','application/json');
    this.urlProductsId = this.urlProduct + product.newDada.id;
    return this.httpClient.get(this.urlProductsId, {headers:headers});
  }

}
