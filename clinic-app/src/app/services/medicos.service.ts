import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  url='https://clinicworld.pythonanywhere.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private  http: HttpClient) {}
  //obtener todos
  recuperarTodos() {
    return this.http.get(`${this.url}getAllusuarios`);
  }

  //insertar
  alta(usuario:any):Observable<any> {
    return this.http.post(`${this.url}addusuarios`,usuario);    
  }
 
  //eliminar
  baja(documento:number) {
    return this.http.delete(`${this.url}deleteUsuarios/${documento}`);
  }

   //editar
  modificacion(usuario:any, documento:number) {
    return this.http.put(`${this.url}/updateUsuarios/`+documento, usuario);    
  } 
}
