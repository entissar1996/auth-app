import { ActivatedRoute, Router } from '@angular/router';
import { Component, NgZone, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/_models/products.model';
import { ProductService } from "./../../_services/product/product.service";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product: IProduct = {
    label: '',
    description: '',
    price: null,
    categorie:'',
    brand:'',
    photo:'',
    quantity:null,
  };

  ProductForm: FormGroup;
  private subscription: Subscription;
  errorMessage;
  successMessage;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) {
    this.ProductForm = this.formBuilder.group({
    label:['', Validators.required],
    description: ['', Validators.required],
    price: [null, Validators.required],
    quantity:[null, Validators.required],
    })
  }

  ngOnInit() { }


  onSubmit(): void{
    this.subscription=this.productService.postProduct(this.ProductForm.value).subscribe({
      next: (response) => {
        this.errorMessage = null;
      this.successMessage = '';
      setTimeout(()=>{
        this.successMessage = 'successs';
      },2000);


      },
      error:(error)=>{
        this.errorMessage = error;
      setTimeout(() => {
        this.errorMessage = null;
      }, 3000);
      console.log(error);
      },
      complete:console.log

    });



  }

}
