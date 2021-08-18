import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListadoService } from 'src/app/servicios/listado.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  public items = new Array<{nombre:string}>();
  public subscription: Subscription | undefined;
 
  constructor(private listadoService: ListadoService) { }


  ngOnInit() {
    this.subscription = this.listadoService.itemsObservable$
    .subscribe((items: Array<{ nombre: string }>) => { this.items = items;},
        err => console.log("Se encontró el siguiente error: " + err),
        () => console.log("El observable esta completo!"));
}

  
  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
}
crearElemento(texto:any) {
    this.listadoService.crearElemento(texto.value);
}
eliminarElemento(index: number) {
    this.listadoService.eliminarElmenento(index);
}

}
