import { Component, OnInit } from '@angular/core';
import {ThemePalette, } from '@angular/material/core';
import { CartService } from '../../shared/cart.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { VirtualMachineService } from 'src/app/Model/virtual-machine.service';
import { EstimateService } from 'src/app/Model/estimate.service';



interface Location {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-virtualmachine',
  templateUrl: './virtualmachine.component.html',
  styleUrls: ['./virtualmachine.component.css'],
  
})
export class VirtualmachineComponent implements OnInit {

  locations: Location[] = [
    {value: 'USA', viewValue: 'USA'},
    {value: 'Germany', viewValue: 'Germany'},
    {value: 'Singapore', viewValue: 'Singapore'},
  ];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  vmForm= new FormGroup({
    ram: new FormControl(''),
    storage: new FormControl(''),
    cpucore: new FormControl(''),
    os: new FormControl(''),
    instance: new FormControl(''),
    noh: new FormControl(''),
    allcheck: new FormControl(''),
    aws: new FormControl(''),
    google: new FormControl(''),
    new: new FormControl(''),
    location: new FormControl('')

  });
  constructor(private fb: FormBuilder, private shared:VirtualMachineService, private EstimateService:EstimateService){

  }


  upram:number;
  upstorage:number;
  upcpucore:number;
  upos:number;
  upinstance:number;
  upnoh:number;
  cost:number;
  vmdata:{};


  assets: any;
  ngOnInit(){
    this.assets=this.EstimateService.availableProviders()
    if ("tempvm" in sessionStorage){    
      let obj=JSON.parse(sessionStorage.getItem("tempvm"));
      this.upram=obj["ram"];
      this.upstorage=obj["storage"];
      this.upcpucore=obj["cpucore"];
      this.upos=obj["os"];
      this.upinstance=obj["instance"];
      this.upnoh=obj["noh"];

      
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
    this.shared.VMFormValue(this.vmForm.value, this.range.value, this.all_selected_values);

  }
}
