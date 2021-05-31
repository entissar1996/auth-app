import { ActivatedRoute, Router } from '@angular/router';
//import { IProduct } from '../../_models/products.model';
import { Component, NgZone, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/_models/products.model';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  tutorial: IProduct = {
    label: '',
    description: '',
    price: null,
    brand:'',
    categorie:'',
    photo:'',
    quantity:null,
  };

  bookForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
  ) {
    this.bookForm = this.formBuilder.group({
      label:[''] ,
    description: [''],
    price: null,
    brand:[''],
    categorie:[''],
    photo:[''],
    quantity:null,
    })
  }

  ngOnInit() { }

  onSubmit(): any {


  }
}
