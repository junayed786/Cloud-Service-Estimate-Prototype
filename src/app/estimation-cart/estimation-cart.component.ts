import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { VirtualMachineTemplateComponent } from './virtual-machine-template/virtual-machine-template.component';
import { ObjectStorageTemplateComponent } from './object-storage-template/object-storage-template.component';

@Component({
  selector: 'app-estimation-cart',
  templateUrl: './estimation-cart.component.html',
  styleUrls: ['./estimation-cart.component.css']
})
export class EstimationCartComponent implements OnInit{
  @ViewChild('container', {read: ViewContainerRef, static: true})
  container!: ViewContainerRef ;
  constructor(){}



  ngOnInit(): void {
    this.container.createComponent(ObjectStorageTemplateComponent)
    this.container.createComponent(VirtualMachineTemplateComponent)
  }

}
