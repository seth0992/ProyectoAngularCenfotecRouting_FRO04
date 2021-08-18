import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  private items = new Array<{ nombre: string, desc:string }>();

  private itemsSubject = new Subject<Array<{ nombre: string, desc:string }>>();

  //private itemsSubject = new ReplaySubject<Array<{ nombre: string }>>();
  public itemsObservable$ = this.itemsSubject.asObservable();

  constructor() { }

  
  crearElemento(nom:string, desc:string) {
    //this.items.push({ nombre: 'Ejemplo ' + this.items.length });
    //this.itemsSubject.next(this.items);
    if (this.items.length > 5)
    {
      this.itemsSubject.error("Se superó el tamaño máximo de elementos");
      //this.itemsSubject.complete()
    }
    else
    {
      this.items.push({nombre: nom, desc:desc});
      this.itemsSubject.next(this.items);
    }
}

eliminarElmenento(index: number) {
    this.items.splice(index, 1);
    this.itemsSubject.next(this.items);
}
}
