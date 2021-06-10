import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { IProduct } from 'src/app/_models/products.model';
import { ProductService } from 'src/app/_services/product/product.service';
import { environment } from 'src/environments/environment';
import { UploadService } from '../upload.service';
import { UploaderComponent } from '../uploader/uploader.component';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  StudentData: any = [];
  dataSource: MatTableDataSource<IProduct>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    'label', 'brand',
    'price', 'quantity',"price_promo",
    'photo','actions'];

  constructor(
    private studentApi: ProductService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    public uploadService:UploadService) {
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

  getUrl(url){
          return `${environment.baseUri}/uploads/${url}`;
  }

  uploadPhoto(id:string){
    console.log("from list ",id)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width="50%";
    dialogConfig.height="50%";
    dialogConfig.data=id;

    let dialogRef = this.dialog.open(UploaderComponent, {data:{id:id}});
    dialogRef.afterClosed().subscribe(console.log)
  }
}
