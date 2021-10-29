import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  url = 'http://127.0.0.1:3000/'; // disponer url de su servidor que tiene las páginas PHP

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
  Actualizar(cita: any, id: number) {
    return this.http.put(`${this.url}/updateCitas/` + id, cita);
  }

   //eliminar
   Eliminar(cita: number) {
    return this.http.delete(`${this.url}deleteCitas/${cita}`);
  }

}
