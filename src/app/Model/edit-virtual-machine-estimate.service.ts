import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditVirtualMachineEstimateService {

  serviceID:any;
  constructor() { }
  EditVMService(data:any){
    this.serviceID=data;
    let obj=JSON.parse(sessionStorage.getItem(this.serviceID));
    obj["id"] = this.serviceID;
    sessionStorage.setItem("tempvm", JSON.stringify(obj));
    
  }

}
