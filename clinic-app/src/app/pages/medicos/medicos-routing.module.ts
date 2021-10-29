import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Medicos
import { MedicosComponent } from "./medicos.component";

const routes: Routes = [
  {
    path: '',
    component: MedicosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
