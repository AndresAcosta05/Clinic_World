import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components 
import { LayoutComponent } from "./pages/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('./Pages/inicio/inicio.module').then((m) => m.InicioModule),
      },
      {
        path: 'blog',
        loadChildren: () => import('./Pages/blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'contactenos',
        loadChildren: () => import('./Pages/contactenos/contactenos.module').then((m) => m.ContactenosModule),
      },
      {
        path: 'nosotros',
        loadChildren: () => import('./Pages/nosotros/nosotros.module').then((m) => m.NosotrosModule),
      },
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
