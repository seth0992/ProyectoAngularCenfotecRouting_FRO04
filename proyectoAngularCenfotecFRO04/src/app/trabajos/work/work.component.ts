import { Component, OnInit } from '@angular/core';
import { Trabajos } from 'src/app/modelos/trabajos';
import { ServicesListService } from 'src/app/services-list.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  listaTrabajos: Trabajos[] = [];
  constructor(private serServicios:ServicesListService) { }

  ngOnInit(): void {
    this.serServicios.obtenerListaServicios().subscribe((serviciosAPI:Trabajos[])=>{this.listaTrabajos=serviciosAPI},(err:any)=>{console.log(err);})
  }

}
