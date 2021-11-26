import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  url = 'https://clinicworld.pythonanywhere.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }
  //obtener todos
  recuperarTodos() {
    return this.http.get(`${this.url}getAllCitas`);
  }

   //insertar
   Insertar(cita: any): Observable<any> {
    return this.http.post(`${this.url}addCitas`, cita);
  }

  //editar
  Actualizar(cita: any, codigo: any) {
    return this.http.put(`${this.url}/updateCitas/` + codigo, cita);
  }

   //eliminar
   Eliminar(codigo: any) {
    return this.http.delete(`${this.url}deleteCitas/${codigo}`);
  }

}
