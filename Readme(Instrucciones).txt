Para el uso correcto de la aplicacion Clinic World se recomienda realizar los siguientes pasos durante el primer uso luego de esto podra usar la aplicacion sin inconvenientes

1) Importe el Backup de la BD de MySQL


2) Ejecutar el siguiente QUERY de insercion de los Tipos de Usuarios
    Insert Into tipo_usuarios(nombre, descripcion) values ('Medico', 'Encargado de las citas');


3) Ingrese en la aplicacion al formulario de medicos e inserte 2 nuevos


4) Ejecutar QUERY para realizar la insercion de especialidades: 
    insert into especialidad(nombre, descripcion) values('Optometria', 'resvisa el ojo'), ('Pedagogia', 'cuidado de niños'), ('Neurologia', 'Revision del estado del cerebro');


5) Ejecutar QUERY para realizar la insercion de las especialidades a los usuarios:
    insert into especialidad_medico(idUsuario, idEspecialidad, fecha_creacion) values (1, 1, '2021-10-12'),(2, 2, '2021-11-15');

Notas: 
* En caso de necesitar mas datos puede agregar mas a la consulta
* Se debe hacer estos pasos debido a que la aplicacion esta en crecimiento y dependera de mas formularios aunque a futuro no sera necesario