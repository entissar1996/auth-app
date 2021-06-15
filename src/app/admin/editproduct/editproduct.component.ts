import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetStudentForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  productForm: FormGroup;

  ngOnInit() {
    this.updateProductForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private studentApi: ProductService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.studentApi.getProductById(id).subscribe(data => {
      this.productForm = this.fb.group({
        label: [data.label, [Validators.required]],
        description: [data.description, [Validators.required]],

      })
    })
  }

  updateProductForm() {
    this.productForm = this.fb.group({
      label: ['', [Validators.required]],
      description: ['', [Validators.required]]

    })
  }





  /* Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.productForm.get('dob').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.productForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updateproductForm() {
    console.log(this.productForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.studentApi.updateProduct(id, this.productForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/listproduct'))
      });
    }
  }
}
