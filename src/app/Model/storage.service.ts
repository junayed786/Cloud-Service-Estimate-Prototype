import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storageParam:any;
  range:any;
  cost:any;
  constructor() { }
  StorageFormValue(data:any,date: any){
    this.storageParam=data 
    this.range=date 

  }
  test(){
    console.log("")
  }

  CalculatedStorageTotal(){
    const date1=this.range['start'];
      const date2=this.range['end'];
      const diffTime = Math.abs(+date2-+date1)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      const duration=diffDays+ " days"
      this.storageParam["startDate"]=date1
      this.storageParam["endDate"]=date2
      this.storageParam["duration"] = duration
      this.storageParam["duration_number"] = diffDays

    if ("tempstorage" in sessionStorage){
      let obj=JSON.parse(sessionStorage.getItem("tempstorage"));
      this.cost=Number(obj['memorysize'])+
      Number(this.storageParam['transfer'])+
      Number(this.storageParam['get'])+
      Number(this.storageParam['put'])+
      Number(this.storageParam["duration_number"])
      const storagedataA=structuredClone(this.storageParam)
      if ( this.storageParam["google"]==true){
        const newDate = 'gs'+ new Date();
        this.storageParam["costgoogle"] = this.cost
        sessionStorage.setItem(obj["id"], JSON.stringify(this.storageParam)); 
      } 
      if ( this.storageParam["aws"]==true){
        const newDateA = 'as'+ new Date();
        storagedataA["costaws"] = this.cost+100
        sessionStorage.setItem(obj["id"], JSON.stringify(storagedataA));
      }
      window.location.reload();
      sessionStorage.removeItem("tempstorage")



    }else {

      const newDate = 'gs'+ new Date();
      const newDateA = 'as'+ new Date();
      

      const storagedataA=structuredClone(this.storageParam)
      this.cost=Number(this.storageParam['memorysize'])+
      Number(this.storageParam['transfer'])+
      Number(this.storageParam['get'])+
      Number(this.storageParam['put'])+
      Number(this.storageParam["duration_number"])
      if ( this.storageParam["google"]==true){
        const newDate = 'gs'+ new Date();
        this.storageParam["costgoogle"] = this.cost
        sessionStorage.setItem(String(newDate), JSON.stringify(this.storageParam)); 
      } 
      if ( this.storageParam["aws"]==true){
        const newDateA = 'as'+ new Date();
        storagedataA["costaws"] = this.cost+100
        sessionStorage.setItem(String(newDateA), JSON.stringify(storagedataA));
      }

      window.location.reload();
    }

  }
  googleCost(){

  }
  awsCost(){

    
  }
}

