import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  //variables a usar
  idCliente: number;
  listaClientes: any;
  formClientes: FormGroup;
  nuevoCliente = {
    tipo_documento: '',
    numero_documento: '',
    nombre: '',
    segundo_nombre: '',
    apellido: '',
    segundo_apellido: '',
    edad: '',
    direccion: '',
    correo: '',
    telefono: ''
  };

  constructor(
    private clientes: ClientesService,
    private formBuilder: FormBuilder
  ) {
    this.formClientes = this.formBuilder.group({
      tipo_documento: ['', Validators.required],
      numero_documento: ['', Validators.required],
      nombre: ['', Validators.required],
      segundo_nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      segundo_apellido: ['', Validators.required],
      edad: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.consultarClientes();
  }

  consultarClientes() {
    this.clientes.recuperarTodos().subscribe(data =>
      this.listaClientes = (data !== 'No hay Informacion Agregada Aun' ? data : [])
    );
  }

  insertarClientes(cliente: any) {
    this.clientes.Insertar(cliente).subscribe(() => {
      this.formClientes.reset();
      this.consultarClientes();
      this.generadorAlerta('success', 'Dato Insertado Correctamente');
    });
  }

  actualizarCliente(cliente: any) {
    console.log(this.idCliente);
    this.clientes.Actualizar(cliente, this.idCliente).subscribe(() => {
      this.generadorAlerta('info', 'Registro Actualizado Correctamente');
      this.formClientes.reset();
      this.consultarClientes();
    });
  }

  eliminarCliente(id: number, nombre, apellido) {
    if (window.confirm(`Desea Eliminar a ${nombre} ${apellido}?`)) {
      this.clientes.Eliminar(id).subscribe(() => {
        this.generadorAlerta('warning', 'Registro Eliminado Correctamente');
        this.formClientes.reset();
        this.consultarClientes();
      });
    }
  }

  seleccionarCliente(cliente: any) {
    this.idCliente = cliente.idCliente;
    this.formClientes.setValue({
      tipo_documento: cliente.tipo_documento,
      numero_documento: cliente.numero_documento,
      nombre: cliente.nombre,
      segundo_nombre: cliente.segundo_nombre,
      apellido: cliente.apellido,
      segundo_apellido: cliente.segundo_apellido,
      edad: cliente.edad,
      direccion: cliente.direccion,
      correo: cliente.correo,
      telefono: cliente.telefono
    });

    //opcion abrir el modal
    const btn = document.querySelector('#btnAgregar') as HTMLElement;
    btn.click();
  }

  generadorAlerta(tipo: string, mensaje: string) {
    //generar aleter
    const content = document.querySelector('.alerta-div');
    const alert = document.createElement('DIV');
    alert.classList.add('alert', `alert-${tipo}`);
    alert.setAttribute('role', 'alert');
    alert.textContent = mensaje;
    content.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}
