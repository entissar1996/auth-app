import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IProduct } from 'src/app/_models/products.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  StudentData: any = [];
  dataSource: MatTableDataSource<IProduct>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['label', 'description', 'price', 'quantity'];

  constructor(private studentApi: ProductService) {
    this.studentApi.getAllProducts().subscribe(data => {
      this.StudentData = data.payload;
      this.dataSource = new MatTableDataSource<IProduct>(this.StudentData);
      console.log(this.dataSource);

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
