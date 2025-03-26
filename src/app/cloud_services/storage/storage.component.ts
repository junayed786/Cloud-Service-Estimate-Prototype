import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StorageService } from 'src/app/Model/object-storage.service'; 
import {ThemePalette, } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { EstimateService } from 'src/app/Model/estimate.service';


interface Location {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit{

  constructor(private shared:StorageService,  public dialog: MatDialog, private EstimateService:EstimateService){
  } 
  locations: Location[] = [
    {value: 'USA', viewValue: 'USA'},
    {value: 'Germany', viewValue: 'Germany'},
    {value: 'Singapore', viewValue: 'Singapore'},
  ];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  
  startDate:Date;
  endDate:Date;
  uplocation: string;
  upmem:number;
  uptransfer:number;
  upget:number;
  upput:number;
  cost:number;
  allComplete: boolean = false;

  
  storageForm= new FormGroup({
    memorysize: new FormControl(''),
    transfer: new FormControl(''),
    get: new FormControl(''),
    put: new FormControl(''),
    allcheck: new FormControl(''),
    aws: new FormControl(''),
    google: new FormControl(''),
    new: new FormControl(''),
    location: new FormControl('')
  });

  assets: any;
  ngOnInit(){
    this.assets=this.EstimateService.availableProviders()
    if ("tempstorage" in sessionStorage){    
      let obj=JSON.parse(sessionStorage.getItem("tempstorage"));
      this.upmem=obj["memorysize"];
      this.uptransfer=obj["transfer"];
      this.upget=obj["get"];
      this.upput=obj["put"];
      this.uplocation=obj["location"]
      this.startDate=obj["startDate"]
      this.endDate=obj["endDate"]      
    }    
  }
  all_selected_values: string[] = [];
  onChange(value: string): void {
    if (this.all_selected_values.includes(value)) {
      this.all_selected_values = this.all_selected_values.filter((item) => item !== value);
    } else {
      this.all_selected_values.push(value);
    }
    console.log(this.all_selected_values);
  }


  saveToCart(){
    this.shared.StorageFormValue(this.storageForm.value, this.range.value, this.all_selected_values);

  }

}
