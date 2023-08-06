import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageComponent } from '../cloud_services/storage/storage.component';

import { VirtualmachineComponent } from '../cloud_services/virtualmachine/virtualmachine.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  openVirtialMachineDialog(){
    this.dialog.open(VirtualmachineComponent);
  }
  openStorageDialog(){
    this.dialog.open(StorageComponent);
  }

}
