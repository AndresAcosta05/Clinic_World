import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NavegacionComponent } from './pages/components/navegacion/navegacion.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { FooterComponent } from './pages/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    ContactenosComponent,
    InicioComponent,
    NavegacionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
