import { Component, OnInit } from '@angular/core';
import { MedicosService } from 'src/app/services/medicos.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  myform: FormGroup
  id_editar: number = 0;

  constructor(private _builder: FormBuilder, private medico: MedicosService) {
    this.myform = this._builder.group({
      tipoid: ['', [Validators.required, Validators.minLength(10)]],
      numid: ['', [Validators.required, Validators.minLength(100)]],
      edad: ['', [Validators.required, Validators.minLength(100)]],
      prinombre: ['', [Validators.required, Validators.minLength(100)]],
      priapellido: ['', [Validators.required, Validators.minLength(100)]],
      segapellido: ['', [Validators.required, Validators.minLength(100)]],
      correo: ['', [Validators.required, Validators.minLength(100)]],
      contrase: ['', [Validators.required, Validators.minLength(100)]]

    })
  }
  lista_medico: any;
  nuevocon = {
    tipoid: null,
    numid: null,
    edad: null,
    prinombre: null,
    segnombre: null,
    priapellido: null,
    segapellido: null,
    direccion: null,
    telefono: null,
    usuario: null,
    correo: null,
    contrase: null

  }
  ////// cuando carga el componente se activa ngonInit y llama el metodo  recuperartodos
  ngOnInit() {
    this.recuperarTodos();

  }
  /// este metodo llama al servicio que se llama recuperar todo que tiene la 
  //ruta para la api--> recuperar toto = getAll
  recuperarTodos() {
    this.medico.recuperarTodos().subscribe(result => this.lista_medico = result);
  }
  //este metodo carga los datos del formulario y llama al servicio con metodo alta
  // que tiene la ruta de agregar  alta=add_medico
  alta(value: any) {
    this.nuevocon = {
      tipoid: value.tipoid,
      numid: value.numid,
      edad: value.edad,
      prinombre: value.prinombre,
      segnombre: value,
      priapellido: value.priapellido,
      segapellido: value.segapellido,
      direccion: null,
      telefono: null,
      usuario: value.usuario,
      correo: value.correo,
      contrase: value.contrase

    }
    this.medico.alta(this.nuevocon).subscribe(datos => {
      console.log(datos)
      alert("Contacto agregado ")
      this.myform.reset()
      this.recuperarTodos()
    });
  }
  // este metodo obtiene el id del contacto a eliminar
  // llama el metodo baja del servicio  baja=delete/<id>
  baja(id: number) {
    if (window.confirm("Esta seguro de eliminar el registro Numero " + id + " ?")) {
      this.medico.baja(id).subscribe(datos => {
        console.log(datos)
        alert("Medico eliminado ")
        this.myform.reset()
        this.recuperarTodos()
      });
    }


  }
  // este metodo obtiene el id del contacto a editar
  // llama el metodo baja del servicio  modificacion=update/<id>
  modificacion(value: any) {
    this.nuevocon = {
      tipoid: value.tipoid,
      numid: value.numid,
      edad: value.edad,
      prinombre: value.prinombre,
      segnombre: value,
      priapellido: value.priapellido,
      segapellido: value.segapellido,
      direccion: null,
      telefono: null,
      usuario: value.usuario,
      correo: value.correo,
      contrase: value.contrase
    }
    this.medico.modificacion(this.nuevocon, this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("medico editado ")
      this.myform.reset()
      this.recuperarTodos()
    });
  }

  //este metodo carga los datos de la fila al formulario
  seleccionar(con_edi: any) {
    this.id_editar = con_edi['id'];
    this.myform.setValue({
      tipoid: con_edi['tipoid'],
      numid: con_edi['numid'],
      edad: con_edi['edad'],
      prinombre: con_edi['prinombre'],
      segnombre: con_edi['segnombre'],
      priapellido: con_edi['priapellido'],
      segapellido: con_edi['segapellido'],
      direccion: con_edi['direccion'],
      telefono: con_edi['telefono'],
      usuario: con_edi['usuario'],
      correo: con_edi['correo'],
      contrase: con_edi['contraseña']
    });
  }
}
