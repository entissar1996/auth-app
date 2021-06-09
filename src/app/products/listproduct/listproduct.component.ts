import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IApiResponse } from 'src/app/_models/api-response.model';
import { IProduct } from 'src/app/_models/products.model';
import { ProductService } from 'src/app/_services/product/product.service';
import { environment } from 'src/environments/environment';
import {take,first, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  StudentData: any = [];
  dataSource: MatTableDataSource<IProduct>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['label', 'description', 'brand', 'categories', 'price'];

  constructor(private studentApi: ProductService) {
    this.studentApi.getAllProducts().subscribe(data => {
      this.StudentData = data;
      this.dataSource = new MatTableDataSource<IProduct>(this.StudentData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  ngOnInit() { }

  deleteStudent(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.studentApi.deleteProduct(e._id).subscribe()
    }
  }

}
