import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ContactenosComponent } from "./contactenos.component";

const routes: Routes = [
  {
    path: '',
    component: ContactenosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactenosRoutingModule { }
