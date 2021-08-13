import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './hero-banner/banner/banner.component';
import { MenugeneralComponent } from './navbar/menugeneral/menugeneral.component';
import { PerfilComponent } from './perfilpersonal/perfil/perfil.component';
import { ArticleserviceComponent } from './sectionservices/articleservice/articleservice.component';
import { WorkComponent } from './trabajos/work/work.component';
import { SectionservicesModule } from './sectionservices/sectionservices.module';
import { TrabajosModule } from './trabajos/trabajos.module';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { ContactoModule } from './contacto/contacto.module';
import { ContactoComponent } from './contacto/contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent
    ,MenugeneralComponent, NoencontradoComponent, 
    // BannerComponent,
    // PerfilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    SectionservicesModule,
    TrabajosModule,
    ContactoModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
