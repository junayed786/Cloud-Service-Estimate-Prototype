import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageComponent } from '../cloud_services/storage/storage.component';
import { VirtualmachineComponent } from '../cloud_services/virtualmachine/virtualmachine.component';
import { RemoveFromCartService } from '../Model/remove-from-cart.service';
import { EditStorageEstimateService } from '../Model/edit-storage-estimate.service';
import { EditVirtualMachineEstimateService } from '../Model/edit-virtual-machine-estimate.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit{
  constructor(
    public dialog: MatDialog, 
    private RemoveFromCartService:RemoveFromCartService,
    private EditStorageEstimateService:EditStorageEstimateService,
    private EditVirtualMachineEstimateService:EditVirtualMachineEstimateService,
    ){
  } 

  totalcost:number;
  storage_google:any=[];
  vm_google:any=[];
  storage_aws:any=[];
  vm_aws:any=[];

  ColumnsStorageGoogle: string[] = ['memorysize', 'transfer', 'get', 'put', 'location','duration', 'costgoogle', 'id'];
  ColumnsStorageAWS: string[] = ['memorysize', 'transfer', 'get', 'put', 'location','duration', 'costaws', 'id'];

  ColumnsVMGoogle: string[] = ['ram', 'storage', 'cpucore', 'os','noh','instance','location','duration',  'costgoogle', 'id'];
  ColumnsVMAWS: string[] = ['ram', 'storage', 'cpucore', 'os','noh','instance','location','duration', 'costaws', 'id'];

  storage_data_google = this.storage_google;
  vm_data_google= this.vm_google;
  storage_data_aws= this.storage_aws;
  vm_data_aws= this.vm_aws;

  ngOnInit(): void {
    for (var i = 0; i < sessionStorage.length; i++){
      let rowdata=JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
      console.log(rowdata);
      if ('costaws' in rowdata){
        if ('cpucore' in rowdata){
          rowdata["id"]=String(sessionStorage.key(i));
          this.vm_aws.push(rowdata);
        }
        if ('get' in rowdata){
          rowdata["id"]=String(sessionStorage.key(i));
          this.storage_aws.push(rowdata);
        }
      }
      if ('costgoogle' in rowdata){
        if ('cpucore' in rowdata){
          rowdata["id"]=String(sessionStorage.key(i));
          this.vm_google.push(rowdata);
        }
        if ('get' in rowdata){
          rowdata["id"]=String(sessionStorage.key(i));
          this.storage_google.push(rowdata);
        }
      }


      // grandtotal=grandtotal+Number(rowdata["costgoogle"]) +Number(rowdata["costaws"])
      // this.totalcost=grandtotal

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
  editServiceVM(id){
    this.EditVirtualMachineEstimateService.EditVMService(id)
    this.dialog.open(VirtualmachineComponent);

  }

}
