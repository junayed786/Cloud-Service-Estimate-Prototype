import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditFileStorageService {

  serviceID:any;
  constructor() { }
  EditFileService(data:any){
    this.serviceID=data;
    let obj=JSON.parse(sessionStorage.getItem(this.serviceID));
    obj["id"] = this.serviceID;
    sessionStorage.setItem("tempFile", JSON.stringify(obj));
    
  }
}
