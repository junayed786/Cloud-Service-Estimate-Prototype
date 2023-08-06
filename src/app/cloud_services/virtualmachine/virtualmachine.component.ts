import { Component, OnInit } from '@angular/core';
import {ThemePalette, } from '@angular/material/core';
import { CartService } from '../../shared/cart.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { VirtualMachineService } from 'src/app/Model/virtual-machine.service';



interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
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
  constructor(private fb: FormBuilder, private shared:VirtualMachineService){

  }


  upram:number;
  upstorage:number;
  upcpucore:number;
  upos:number;
  upinstance:number;
  upnoh:number;
  cost:number;

  vmdata:{};

  saveToCart(){
    this.shared.VMFormValue(this.vmForm.value, this.range.value);
    this.shared.calculateVM();

  }
  ngOnInit(){

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
  task: Task = {
    name: 'All Service Providers',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'AWS', completed: false, color: 'primary'},
      {name: 'Google', completed: false, color: 'primary'},
      {name: 'New', completed: false, color: 'primary'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
}
