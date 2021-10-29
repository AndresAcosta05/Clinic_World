import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  url='http://127.0.0.1:3000/'; // disponer url de su servidor que tiene las páginas PHP

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
  baja(usuario:number) {
    return this.http.delete(`${this.url}deleteUsuarios/${usuario}`);
  }

   //editar
  modificacion(usuario:any, id:number) {
    return this.http.put(`${this.url}/updateUsuarios/`+id, usuario);    
  } 
}
