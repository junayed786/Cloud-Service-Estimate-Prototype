import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


import { VirtualmachineComponent } from './virtualmachine/virtualmachine.component';
import { StorageComponent } from './storage/storage.component';
import { FilestorageComponent } from './filestorage/filestorage.component';

@NgModule({
  declarations: [
    VirtualmachineComponent,
    StorageComponent,
    FilestorageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TextFieldModule,
    NgModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class ServicesModule { }
