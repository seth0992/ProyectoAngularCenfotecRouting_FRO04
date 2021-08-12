import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  nombre:string = "Jeremy Elizondo";
  desc:string = "Entusiasta de la tecnología, me gusta la programación y el diseño y desarrollo web."
  constructor() { }

  ngOnInit(): void {
  }

}
