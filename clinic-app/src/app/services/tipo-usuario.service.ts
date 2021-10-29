import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {
  url='http://127.0.0.1:3000/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private  http: HttpClient) {}
  //obtener todos
  recuperarTodos() {
    return this.http.get(`${this.url}getAlltipo`);
  }
}
