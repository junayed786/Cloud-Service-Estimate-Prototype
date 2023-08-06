import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakDownEstimateService {
  storage_google:any=[];
  vm_google:any=[];
  storage_aws:any=[];
  vm_aws:any=[];
  constructor() { }
  processEstimationDetails(){
    // let grandtotal =0
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
    return this.vm_aws,this.storage_aws, this.vm_google, this.storage_google
  }
}
