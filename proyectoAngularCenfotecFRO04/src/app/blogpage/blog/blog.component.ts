import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListadoService } from 'src/app/servicios/listado.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  public items = new Array<{nombre:string, desc:string}>();
  public subscription: Subscription | undefined;
 
  constructor(private listadoService: ListadoService) { }


  ngOnInit() {
    this.subscription = this.listadoService.itemsObservable$
    .subscribe((items: Array<{ nombre: string, desc:string }>) => { this.items = items;},
        err => console.log("Se encontró el siguiente error: " + err),
        () => console.log("El observable esta completo!"));
}
  
  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
}
agregarPost(nom:any, des:any) {
 
  console.log(nom.value)
    this.listadoService.crearElemento(nom.value, des.value);
    return false;
}
eliminarElemento(index: number) {
    this.listadoService.eliminarElmenento(index);
}

}
