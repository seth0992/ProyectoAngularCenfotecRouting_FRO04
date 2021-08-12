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



@NgModule({
  declarations: [
    AppComponent
    ,MenugeneralComponent,
    // BannerComponent,
    // PerfilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,AppRoutingModule,
    SectionservicesModule,TrabajosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
