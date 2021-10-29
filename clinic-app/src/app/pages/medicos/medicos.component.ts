import { Component, OnInit } from '@angular/core';
import { MedicosService } from 'src/app/services/medicos.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { TipoUsuarioService } from 'src/app/services/tipo-usuario.service';
@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  myform: FormGroup
  id_editar: number = 0;

  constructor(private _builder:FormBuilder,private medico:MedicosService, private tipoUsuario:TipoUsuarioService) { 
    this.myform=this._builder.group({
      tipo_documento: ['',[Validators.required,Validators.minLength(10)]],
      numero_documento: ['',[Validators.required,Validators.minLength(100)]],
      edad: ['',[Validators.required,Validators.minLength(100)]],
      nombre: ['',[Validators.required,Validators.minLength(100)]],
      segundo_nombre: ['',[Validators.required,Validators.minLength(100)]],
      apellido: ['',[Validators.required,Validators.minLength(100)]],
      segundo_apellido: ['',[Validators.required,Validators.minLength(100)]],
      direccion: ['',[Validators.required,Validators.minLength(100)]],
     telefono: ['',[Validators.required,Validators.minLength(100)]],
      correo: ['',[Validators.required,Validators.minLength(100)]],
      usuario: ['',[Validators.required,Validators.minLength(100)]],
      contraseña: ['',[Validators.required,Validators.minLength(100)]],
      idTipo_usuario: ['',[Validators.required,Validators.minLength(100)]],

    })
  }
  lista_tipo: any;
  lista_medico: any;
  nuevocon = {
    tipo_documento: null,
    numero_documento:null,
      edad: null,
      nombre: null,
      segundo_nombre:null,
      apellido:null,
      segundo_apellido: null,
      direccion:null,
      telefono:null,
      correo:null, 
      usuario:null,
      contraseña:null,
      idTipo_usuario: null
  }
  ////// cuando carga el componente se activa ngonInit y llama el metodo  recuperartodos
  ngOnInit() {
    this.recuperarTodos();
    this.tipoUsuario.recuperarTodos().subscribe(result => 
      this.lista_tipo = (result !== 'No hay Informacion Agregada Aun' ? result : [ ]));
  }
  /// este metodo llama al servicio que se llama recuperar todo que tiene la 
  //ruta para la api--> recuperar toto = getAll
  recuperarTodos() {
    this.medico.recuperarTodos().subscribe(result => 
      this.lista_medico = (result !== 'No hay Informacion Agregada Aun' ? result : [ ]));
  }
  //este metodo carga los datos del formulario y llama al servicio con metodo alta
  // que tiene la ruta de agregar  alta=add_medico
  alta(value: any) {
    console.log(value);
    
    this.nuevocon = {
      tipo_documento: value.tipo_documento,
      numero_documento: value.numero_documento,
      edad: value.edad,
      nombre: value.nombre,
      segundo_nombre: value.segundo_nombre,
      apellido: value.apellido,
      segundo_apellido: value.segundo_apellido,
      direccion:value.direccion,
      telefono:value.telefono,
      correo:value.correo, 
      usuario:value.usuario,
      contraseña:value.contraseña,
      idTipo_usuario: value.idTipo_usuario
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
      tipo_documento: value.tipo_documento,
      numero_documento: value.numero_documento,
      edad: value.edad,
      nombre: value.nombre,
      segundo_nombre: value.segundo_nombre,
      apellido: value.apellido,
      segundo_apellido: value.segundo_apellido,
      direccion: value.direccion,
      telefono:value.telefono,
      correo:value.correo, 
      usuario:value.usuario,
      contraseña:value.contraseña,
      idTipo_usuario: value.idTipo_usuario
    }
    this.medico.modificacion(this.nuevocon, this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("medico editado ")
      this.myform.reset()
      this.recuperarTodos()
    });
  }

  //este metodo carga los datos de la fila al formulario
  seleccionar(con_edi:any) {
   this.id_editar=con_edi['id'];
   this.myform.setValue({
    tipoid: con_edi['tipoid'],
    numid:con_edi['numid'],
    edad: con_edi['edad'],
    prinombre: con_edi['prinombre'],
    segnombre:con_edi['segnombre'],
    priapellido:con_edi['priapellido'],
    segapellido: con_edi['segapellido'],
    direccion:con_edi['direccion'],
    telefono:con_edi['telefono'],
   
    correo:con_edi['correo'], 
    usuario:con_edi['usuario'],
    contrase:con_edi['contraseña']
  
  })
  }
}
