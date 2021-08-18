import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blogpage/blog/blog.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { BannerComponent } from './hero-banner/banner/banner.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { PerfilComponent } from './perfilpersonal/perfil/perfil.component';
import { ArticleserviceComponent } from './sectionservices/articleservice/articleservice.component';
import { WorkComponent } from './trabajos/work/work.component';

const routes: Routes = [
  {path: "", component:BannerComponent},
  {path: "Inicio", component:BannerComponent},
  {path:"Acerca", component:PerfilComponent},
  {path:"Servicios", component:ArticleserviceComponent},
  {path:"Portafolio", component:WorkComponent},
  {path:"Contáctenos", component:ContactoComponent},
  {path:"Blog", component:BlogComponent},
  {path:"**", component:NoencontradoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
