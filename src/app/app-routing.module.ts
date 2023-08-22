import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageComponent } from './cloud_services/storage/storage.component';
import { ProvidersComponent } from './providers/providers.component';
import { HomeComponent } from './home/home.component';
import { VirtualmachineComponent } from './cloud_services/virtualmachine/virtualmachine.component';
import { CartComponent } from './cart/cart.component';
import { EstimationCartComponent } from './estimation-cart/estimation-cart.component';
import { FilestorageComponent } from './cloud_services/filestorage/filestorage.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'storage', component: StorageComponent},
  {path: 'providers', component: ProvidersComponent},
  {path: 'virtualmachines', component: VirtualmachineComponent},
  {path: 'cart', component: CartComponent},
  {path: 'estimationcart', component: EstimationCartComponent},
  {path: 'filestorage', component: FilestorageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
