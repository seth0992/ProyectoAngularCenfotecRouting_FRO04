import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],exports:[
    ContactoComponent
  ]
})
export class ContactoModule { }
