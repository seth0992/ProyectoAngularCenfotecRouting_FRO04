import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menugeneral',
  templateUrl: './menugeneral.component.html',
  styleUrls: ['./menugeneral.component.css']
})
export class MenugeneralComponent implements OnInit {

  
  elementos:string[] = ["Inicio","Acerca","Servicios","Portafolio","Contáctenos"]
  constructor() { }
  claseVisible:boolean = false
  ngOnInit(): void {
    this.claseVisible = false
  }

  toogleNav():void{
    this.claseVisible = !this.claseVisible ? true : false
  }
  

}
