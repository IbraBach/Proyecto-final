import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productsForm: FormGroup;

  private formSubmitAttempt: boolean;

  constructor(private fb: FormBuilder, private productSercive: ProductService) { }
  
  myProducts: IProduct;

  ngOnInit() {
    this.createUserForm();
  }

  createUserForm() {
    this.productsForm = this.fb.group({
      imageUrl: ['', Validators.required],
      productName: ['', Validators.required],
      author: ['', Validators.required],
      publicationYear: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      starRating: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.productsForm.get(field).valid && this.productsForm.get(field).touched) ||
      (this.productsForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    console.log(this.productsForm.value);
    this.productSercive.createProduct(this.productsForm.value).subscribe(dato => {
      console.log(dato);
      this.myProducts = dato;
    })
  }
}
