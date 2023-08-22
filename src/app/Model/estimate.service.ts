import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstimateService {
  storageData:any;
  cost:any;
  constructor() { }

  availableProviders(){
    return ['All Service Providers','AWS','Google','Azure','IBM','Telekom']
  }

  estimate(OS_data:any){
    this.storageData=OS_data
    this.cost=Math.floor((Math.random() * 100) + 100)
    return this.cost

    }
 

}
