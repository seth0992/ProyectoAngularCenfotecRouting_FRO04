import { Component, OnInit } from '@angular/core';
import { Email, tipoTrabajoEnum }from 'src/app/modelos/email'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  miContacto = new Email(1, 'Jeremy Elizondo', 'jbraseth@gmail.com', 'FreeLance', 'Contrato', true,'5555555');

  submitted = false;

  onSubmit(contactoForm: NgForm) {
    console.log('form', contactoForm);
    console.log('form controls', contactoForm.controls);
    console.log('form value', contactoForm.value);
    console.log('miContacto', this.miContacto);

    if (contactoForm.form.valid) {
      this.submitted = true;
    } else {
      console.log('Formulario Invalido.');
    }

  }

  nuevoContacto() {
    this.miContacto = new Email(2, 'Jeremy Elizondo', 'jbraseth@gmail.com', 'FreeLance', 'Contrato', true,'5555555');
}

  constructor() { }

  ngOnInit(): void {
  }

}
