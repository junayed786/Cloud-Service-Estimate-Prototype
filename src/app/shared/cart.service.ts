import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService  {
  private subject=  new Subject<any>();
  storageParam:any
  vmcost:string
  total:number
  text:string
  constructor() { }
  sendStorageFormValue(data:any){
    this.storageParam=data   
  }
  getStorageFormValue(){
    return this.subject.asObservable ();
  }

}
