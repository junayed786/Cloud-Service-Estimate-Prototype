import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Model/object-storage.service'; 

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{
  constructor(private shared:StorageService ){
  } 

  grandtotal:number
  ngOnInit(): void {
    let total=0;
    for (var i = 0; i < sessionStorage.length; i++){
      let rowdata=JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));

      total=total+Number(rowdata["cost"])
      

    }
    this.grandtotal=total
  }

}
