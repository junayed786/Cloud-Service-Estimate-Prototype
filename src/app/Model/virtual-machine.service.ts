import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VirtualMachineService {
  VMParam:any;
  range:any;
  cost:any;
  constructor() { }
  
  VMFormValue(data:any,date: any){
    this.VMParam=data 
    this.range=date 
    
  }
  
  calculateVM(){
    if ("tempvm" in sessionStorage){
      let obj=JSON.parse(sessionStorage.getItem("tempvm"));
      this.cost=Number(this.VMParam['ram'])+
      Number(this.VMParam['storage'])+
      Number(this.VMParam['cpucore'])+
      Number(this.VMParam['instance'])+
      Number(this.VMParam.controls['noh'])
      this.VMParam["cost"] = this.cost;
      sessionStorage.setItem(obj["id"],JSON.stringify(this.VMParam));
      window.location.reload();
      sessionStorage.removeItem("tempvm")

    }else {

      const newDate = "av"+new Date();
      const newDate2 = "gv"+new Date();
      const date1=this.range['start'];
      const date2=this.range['end'];
      const diffTime = Math.abs(+date2-+date1)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      const duration=diffDays+ " days"

      this.VMParam["duration"] = duration

      const vmdata2=structuredClone(this.VMParam)
      this.cost=Number(this.VMParam['ram'])+
      Number(this.VMParam['storage'])+
      Number(this.VMParam['cpucore'])




      if ( this.VMParam["aws"]==true){
      this.VMParam["costaws"] = this.cost;
      sessionStorage.setItem(String(newDate), JSON.stringify(this.VMParam));
      } 
      if ( this.VMParam["google"]==true){
        vmdata2["costgoogle"] = this.cost+1000;
        sessionStorage.setItem(String(newDate2), JSON.stringify(vmdata2));
      }
      console.log(this.VMParam);
      console.log(vmdata2);
      window.location.reload();
    }
  }

}
