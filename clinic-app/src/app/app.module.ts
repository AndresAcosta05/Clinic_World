import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './pages/layout/components/header/header.component';
import { FooterComponent } from './pages/layout/components/footer/footer.component';

// Service
import { TokenInterceptorService } from "./core/services/token-interceptors.service";
import { NavegacionComponent } from './pages/layout/components/navegacion/navegacion.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { CitasComponent } from './pages/citas/citas.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavegacionComponent,
    MedicosComponent,
    CitasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
