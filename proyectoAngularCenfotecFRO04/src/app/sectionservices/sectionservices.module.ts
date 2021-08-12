import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleserviceComponent } from './articleservice/articleservice.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ArticleserviceComponent
  ],
  imports: [
    CommonModule,HttpClientModule
  ],exports:[ArticleserviceComponent]
})
export class SectionservicesModule { }
