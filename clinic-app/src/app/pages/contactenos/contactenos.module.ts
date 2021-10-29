import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactenosRoutingModule } from './contactenos-routing.module';
import { ContactenosComponent } from './contactenos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactenosComponent
  ],
  imports: [
    CommonModule,
    ContactenosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactenosModule { }
