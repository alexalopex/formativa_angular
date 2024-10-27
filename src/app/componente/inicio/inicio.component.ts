import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  formularioForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularioForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: '', 
    });
  }

  ngOnInit() {
    console.log("Ejecutando el ngOnInit");
  }

  enviarDatos() {
    if (this.formularioForm.valid) {
      let datos_formulario = this.formularioForm.value;
      console.log('Datos del formulario:', datos_formulario);
  }
}
}
