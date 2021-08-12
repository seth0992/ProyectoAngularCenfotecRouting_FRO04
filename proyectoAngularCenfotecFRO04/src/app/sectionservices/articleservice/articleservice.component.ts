import { Component, OnInit } from '@angular/core';
import { Servicios } from 'src/app/modelos/servicios';
import { ServicesListService } from 'src/app/services-list.service';

@Component({
  selector: 'app-articleservice',
  templateUrl: './articleservice.component.html',
  styleUrls: ['./articleservice.component.css']
})
export class ArticleserviceComponent implements OnInit {

  listaServicios: Servicios[] = [];
  constructor(private serServicios:ServicesListService) { }

  ngOnInit(){
    this.serServicios.obtenerListaServicios().subscribe((serviciosAPI:Servicios[])=>{this.listaServicios=serviciosAPI},(err:any)=>{console.log(err);})
  }

}
