import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StorageService } from 'src/app/Model/storage.service'; 
import {ThemePalette, } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

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
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit{

  constructor(private shared:StorageService,  public dialog: MatDialog, ){
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



  storagedataG:{};
  storagedataA:{};
  
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


  saveToCart(){
    this.shared.StorageFormValue(this.storageForm.value, this.range.value);
    this.shared.CalculatedStorageTotal();

  
  }
  ngOnInit(){
    console.log(" checking oninit on storage")
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
