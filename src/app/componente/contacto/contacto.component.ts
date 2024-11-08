import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  formularioForm: FormGroup;
  datos_formulario: any;

  constructor(private formBuilder: FormBuilder) {
  
    this.formularioForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: '',
    });
  }

  ngOnInit(): void {
    console.log("Ejecutando el ngOnInit");
  }

  enviarDatos(): void {
    if (this.formularioForm.valid) {
      this.datos_formulario = this.formularioForm.value;
      console.log('Datos del formulario:', this.datos_formulario);
    } else {
      console.log('Formulario no válido');
    }
  }
}
