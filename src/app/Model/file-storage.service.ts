import { Injectable } from '@angular/core';
import { EstimateService } from './estimate.service';
EstimateService
@Injectable({
  providedIn: 'root'
})
export class FileStorageService {
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
    if ("tempfile" in sessionStorage){
      let obj=JSON.parse(sessionStorage.getItem("tempstorage"));
      sessionStorage.setItem(obj['id'], JSON.stringify(this.storageParam));
      sessionStorage.removeItem("tempstorage")
      window.location.reload();
    }
    else {
      for (var val of this.providers) {
        const serviceID = val+ new Date();
        this.storageParam["provider"]=val
        this.storageParam["service"]="filestorage"
        this.storageParam["cost"] = this.EstimateService.estimate(this.storageParam)
        sessionStorage.setItem(serviceID, JSON.stringify(this.storageParam)); 
      }
      window.location.reload();
    }

  }
  providerList(){
    return this.providers
  }
}
