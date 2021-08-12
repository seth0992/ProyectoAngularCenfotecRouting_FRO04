import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    WorkComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],exports:[WorkComponent]
})
export class TrabajosModule { }
