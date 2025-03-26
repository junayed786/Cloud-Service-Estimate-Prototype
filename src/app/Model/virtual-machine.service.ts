import { Injectable } from '@angular/core';
import { EstimateService } from './estimate.service';


@Injectable({
  providedIn: 'root'
})
export class VirtualMachineService {
  VMParam:any;
  range:any;
  cost:any;
  providers:any;
  constructor(private EstimateService:EstimateService) { }
  
  VMFormValue(data:any,date: any,providers:any){
    this.VMParam=data 
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
    this.VMParam["duration"] = duration
    if ("tempstorage" in sessionStorage){
      let obj=JSON.parse(sessionStorage.getItem("tempstorage"));
      sessionStorage.setItem(obj['id'], JSON.stringify(this.VMParam));
      sessionStorage.removeItem("tempstorage")
      window.location.reload();
    }
    else {
      for (var val of this.providers) {
        const serviceID = val+ new Date();
        this.VMParam["provider"]=val
        this.VMParam["service"]="virtualmachine"
        this.VMParam["cost"] = this.EstimateService.estimate(this.VMParam)
        sessionStorage.setItem(serviceID, JSON.stringify(this.VMParam)); 
      }
      window.location.reload();
    }

  }

}
