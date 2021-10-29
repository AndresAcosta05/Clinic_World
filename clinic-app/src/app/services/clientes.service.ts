import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  //url del servicio
  url = "http://127.0.0.1:3000/";

  constructor(
    private http: HttpClient
  ) { }

  recuperarTodos() {
    return this.http.get(`${this.url}getAllcliente`);
  }

  //insertar
  alta(cliente: any): Observable<any> {
    return this.http.post(`${this.url}addCLiente`, cliente);
  }

  //eliminar
  baja(cliente: number) {
    return this.http.delete(`${this.url}deleteCliente/${cliente}`);
  }

  //editar
  modificacion(cliente: any, id: number) {
    return this.http.put(`${this.url}/updateCliente/` + id, cliente);
  }
}
