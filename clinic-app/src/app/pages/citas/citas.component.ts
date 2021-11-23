import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { EspecialidadMedicosService } from 'src/app/services/especialidad-medicos.service';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  //variables
  listaCitas: any;
  listaClientes: any;
  listaEsp_medicos: any;
  formCitas: FormGroup;
  codigo: any;
  nuevaCita = {
    idCliente: '',
    idEspecialidad_medico: '',
    fecha_hora: ''
  }

  constructor(
    private ClientesService: ClientesService,
    private especialidadMedicosService: EspecialidadMedicosService,
    private citasService: CitasService,
    private formBuilder: FormBuilder
  ) {
    this.formCitas = this.formBuilder.group({
      idCliente: ['', Validators.required],
      idEspecialidad_medico: ['', Validators.required],
      fecha_hora: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.consultarCitas();
    this.consultarClientes();
    this.consultarEsp_medicos();
  }

  consultarClientes() {
    this.ClientesService.recuperarTodos().subscribe(data => {
      this.listaClientes = (data !== 'No hay Informacion Agregada Aun' ? data : []);
    });
  }

  consultarEsp_medicos() {
    this.especialidadMedicosService.recuperarTodos().subscribe(data => {
      this.listaEsp_medicos = (data !== 'No hay Informacion Agregada Aun' ? data : []);
    });
  }

  consultarCitas() {
    this.citasService.recuperarTodos().subscribe(data => {
      this.listaCitas = (data !== 'No hay Informacion Agregada Aun' ? data : []);
    });
  }

  insertarCita(cita: any) {
    this.citasService.Insertar(cita).subscribe(() => {
      this.formCitas.reset();
      this.consultarCitas();
    });
  }

  actualizarcita(cita: any) {
    this.citasService.Actualizar(cita, this.codigo).subscribe(() => {
      this.formCitas.reset();
      this.consultarCitas();
    });
  }

  eliminarCita(codigo: any) {
    if (window.confirm(`Desea Eliminar la cita ${codigo}?`)) {
      this.citasService.Eliminar(codigo).subscribe(() => {
        this.formCitas.reset();
        this.consultarCitas();
      });
    }
  }
  
  seleccionarCita(cita: any) {
    this.codigo = cita.codigo;
    this.formCitas.setValue({
      idCliente: cita.idCliente,
      idEspecialidad_medico: cita.idEsp_Medico,
      fecha_hora: cita.fecha
    });
    const btn = document.querySelector('#btnAgregar') as HTMLElement;
    btn.click();
  }
}
