import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditVirtualMachineEstimateService } from 'src/app/Model/edit-virtual-machine-estimate.service';
import { RemoveFromCartService } from 'src/app/Model/remove-from-cart.service';
import { VirtualmachineComponent } from 'src/app/cloud_services/virtualmachine/virtualmachine.component';



@Component({
  selector: 'app-virtual-machine-template',
  templateUrl: './virtual-machine-template.component.html',
  styleUrls: ['./virtual-machine-template.component.css']
})
export class VirtualMachineTemplateComponent implements OnInit{
  constructor(
    public dialog: MatDialog, 
    private RemoveFromCartService:RemoveFromCartService,
    private EditVirtualMachineEstimateService:EditVirtualMachineEstimateService,
    ){
  } 
  totalcost:number;
  vm_google:any=[];
  vm_aws:any=[];
  ColumnsVMGoogle: string[] = ['provider','ram', 'storage', 'cpucore', 'os','noh','instance','location','duration',  'costgoogle', 'id'];
  ColumnsVMAWS: string[] = ['ram', 'storage', 'cpucore', 'os','noh','instance','location','duration', 'costaws', 'id'];

  vm_data_google= this.vm_google;
  vm_data_aws= this.vm_aws;
  ngOnInit(): void {
    for (var i = 0; i < sessionStorage.length; i++){
      let rowdata=JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
      if (rowdata["service"]=="virtualmachine"){
        rowdata["id"]=String(sessionStorage.key(i));
        this.vm_google.push(rowdata);
      }
    }
  }
  removeService(id:any){
    this.RemoveFromCartService.removeService(id);

  }

  editServiceVM(id){
    this.EditVirtualMachineEstimateService.EditVMService(id)
    this.dialog.open(VirtualmachineComponent);

  }

}
