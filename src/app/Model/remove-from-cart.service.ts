import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoveFromCartService {
  serviceID:any;
  constructor() { }
  removeService(data:any){
    this.serviceID=data;
    sessionStorage.removeItem(this.serviceID);
    window.location.reload();
    
  }
}
