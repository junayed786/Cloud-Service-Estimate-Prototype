import { Injectable } from '@angular/core';
import { EstimateService } from './estimate.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService{
  storageParam:any;
  range:any;
  providers:any;

  constructor(private EstimateService:EstimateService) { }
  StorageFormValue(data:any,date: any, providers:any){
    this.storageParam=data 
    this.range=date 
    this.providers=providers
  this.addForEstimate()

  }

  addForEstimate(){

    const date1=this.range['start'];
    const date2=this.range['end'];
    const diffTime = Math.abs(+date2-+date1)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const duration=diffDays+ " days"
    this.storageParam["duration"] = duration
    if ("tempstorage" in sessionStorage){
      let obj=JSON.parse(sessionStorage.getItem("tempstorage"));
      sessionStorage.setItem(obj['id'], JSON.stringify(this.storageParam));
      sessionStorage.removeItem("tempstorage")
      window.location.reload();
    }
    else {
      for (var val of this.providers) {
        const serviceID = val+ new Date();
        this.storageParam["provider"]=val
        this.storageParam["service"]="objectstorage"
        this.storageParam["cost"] = this.EstimateService.estimate(this.storageParam)
        sessionStorage.setItem(serviceID, JSON.stringify(this.storageParam)); 
      }
      window.location.reload();
    }

  }
  providerList(){
    return this.providers
  }
  // conditionCheck(key1:any,key2:any) {
  //   const storagedataA=structuredClone(this.storageParam)
  //   if ( this.storageParam["google"]==true){
  //     const newDate = 'gs'+ new Date();
  //     this.storageParam["costgoogle"] = this.EstimateService.estimateObjectStorage(this.storageParam)
  //     sessionStorage.setItem(key1, JSON.stringify(this.storageParam)); 
  //   } 
  //   if ( this.storageParam["aws"]==true){
  //     const newDateA = 'as'+ new Date();
  //     storagedataA["costaws"] = this.EstimateService.estimateObjectStorageAWS(this.storageParam)
  //     sessionStorage.setItem(key2, JSON.stringify(storagedataA));
  //   }
  //   window.location.reload();
  // }
}

