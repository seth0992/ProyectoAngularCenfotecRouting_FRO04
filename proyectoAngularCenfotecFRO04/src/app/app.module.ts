import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenugeneralComponent } from './navbar/menugeneral/menugeneral.component';
import { SectionservicesModule } from './sectionservices/sectionservices.module';
import { TrabajosModule } from './trabajos/trabajos.module';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { ContactoModule } from './contacto/contacto.module';
import { BlogpageModule } from './blogpage/blogpage.module';




@NgModule({
  declarations: [
    AppComponent
    ,MenugeneralComponent, NoencontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    SectionservicesModule,
    TrabajosModule,
    ContactoModule,
    FormsModule,BlogpageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
