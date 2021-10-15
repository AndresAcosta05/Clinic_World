import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { BlogComponent } from "./blog.component";

const routes: Routes = [
  {
    path: '', 
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
