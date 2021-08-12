import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Servicios } from './modelos/servicios';
import { Observable } from 'rxjs';
import { Trabajos } from './modelos/trabajos';

@Injectable({
  providedIn: 'root'
})
export class ServicesListService {

  baseURL = environment.webapiURL + 'services'
  baseURLTrabajos = environment.webapiURL + 'works'
  
  constructor(private http:HttpClient) { }

  obtenerListaServicios():Observable<Servicios[]>{
    return this.http.get<Servicios[]>(this.baseURL);
  }

  obtenerListaTrabajos():Observable<Trabajos[]>{
    return this.http.get<Trabajos[]>(this.baseURLTrabajos)
  }

}
