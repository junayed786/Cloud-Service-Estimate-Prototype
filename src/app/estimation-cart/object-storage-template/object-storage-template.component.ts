import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditStorageEstimateService } from 'src/app/Model/edit-storage-estimate.service';
import { RemoveFromCartService } from 'src/app/Model/remove-from-cart.service';
import { StorageComponent } from 'src/app/cloud_services/storage/storage.component';


@Component({
  selector: 'app-object-storage-template',
  templateUrl: './object-storage-template.component.html',
  styleUrls: ['./object-storage-template.component.css']
})
export class ObjectStorageTemplateComponent implements OnInit{
  constructor(
    public dialog: MatDialog, 
    private RemoveFromCartService:RemoveFromCartService,
    private EditStorageEstimateService:EditStorageEstimateService,
    ){
  } 
  totalcost:number;
  storage_google:any=[];
  storage_aws:any=[];
  ColumnsStorageGoogle: string[] = ['memorysize', 'transfer', 'get', 'put', 'location','duration', 'costgoogle', 'id'];
  ColumnsStorageAWS: string[] = ['memorysize', 'transfer', 'get', 'put', 'location','duration', 'costaws', 'id'];
  storage_data_google = this.storage_google;
  storage_data_aws= this.storage_aws;
  ngOnInit(): void {
    for (var i = 0; i < sessionStorage.length; i++){
      let rowdata=JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
      console.log(rowdata);
      if ('costaws' in rowdata){
        if ('get' in rowdata){
          rowdata["id"]=String(sessionStorage.key(i));
          this.storage_aws.push(rowdata);
        }
      }
      if ('costgoogle' in rowdata){
        if ('get' in rowdata){
          rowdata["id"]=String(sessionStorage.key(i));
          this.storage_google.push(rowdata);
        }
      }
    }
  }
  removeService(id:any){
    this.RemoveFromCartService.removeService(id);

  }
  editServiceStorage(id){
    this.EditStorageEstimateService.EditStorageService(id);
    this.dialog.open(StorageComponent, {
      height: '60%',
      width: '35%',
    });

  }



}
