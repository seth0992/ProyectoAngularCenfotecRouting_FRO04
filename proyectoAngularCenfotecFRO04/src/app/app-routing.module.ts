import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './hero-banner/banner/banner.component';
import { PerfilComponent } from './perfilpersonal/perfil/perfil.component';
import { ArticleserviceComponent } from './sectionservices/articleservice/articleservice.component';
import { WorkComponent } from './trabajos/work/work.component';

const routes: Routes = [
  {path: "", component:BannerComponent},
  {path: "Inicio", component:BannerComponent},
  {path:"Acerca", component:PerfilComponent},
  {path:"Servicios", component:ArticleserviceComponent},
  {path:"Portafolio", component:WorkComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
