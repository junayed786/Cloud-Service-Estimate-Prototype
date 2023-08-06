import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgIf, JsonPipe} from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { StorageComponent } from './cloud_services/storage/storage.component';
import { ProvidersComponent } from './providers/providers.component';
import { HomeComponent } from './home/home.component';
import { VirtualmachineComponent } from './cloud_services/virtualmachine/virtualmachine.component';
import { CartComponent } from './cart/cart.component';
import { EstimationCartComponent } from './estimation-cart/estimation-cart.component';
import { ObjectStorageTemplateComponent } from './estimation-cart/object-storage-template/object-storage-template.component';
import { VirtualMachineTemplateComponent } from './estimation-cart/virtual-machine-template/virtual-machine-template.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StorageComponent,
    ProvidersComponent,
    HomeComponent,
    VirtualmachineComponent,
    CartComponent,
    EstimationCartComponent,
    ObjectStorageTemplateComponent,
    VirtualMachineTemplateComponent,


  ],
  imports: [
    JsonPipe,
    NgIf,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDialogModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
