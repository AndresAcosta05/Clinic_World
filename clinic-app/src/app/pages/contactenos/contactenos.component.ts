import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  //variables a usar
  listaClientes: any;

  constructor(
    private clientes: ClientesService
  ) { }

  ngOnInit(): void {
    this.consultarClientes();
  }

  consultarClientes() {
    this.clientes.recuperarTodos().subscribe(data => this.listaClientes = data ); 
  }
}
