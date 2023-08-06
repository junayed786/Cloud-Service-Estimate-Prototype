import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditStorageEstimateService {

  serviceID:any;
  constructor() { }
  EditStorageService(data:any){
    this.serviceID=data;
    let obj=JSON.parse(sessionStorage.getItem(this.serviceID));
    obj["id"] = this.serviceID;
    sessionStorage.setItem("tempstorage", JSON.stringify(obj));
    
  }

}
