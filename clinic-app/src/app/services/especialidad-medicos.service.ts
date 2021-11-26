import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadMedicosService {

  url = 'https://clinicworld.pythonanywhere.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }
  //obtener todos
  recuperarTodos() {
    return this.http.get(`${this.url}getAllEsp_medico`);
  }
}
