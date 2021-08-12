import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenugeneralComponent } from './menugeneral/menugeneral.component';



@NgModule({
  declarations: [
    MenugeneralComponent
  ],
  imports: [
    CommonModule
  ], exports:[
    MenugeneralComponent
  ]
})
export class NavbarModule { }
