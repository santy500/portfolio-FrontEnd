import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Experiencia } from '../Modelo/Experiencia';
import { Credentials } from '../Modelo/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor( private http:HttpClient ) { }

  
  

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
  }

  getExperienciaById(id:String){
    return this.http.get<Experiencia>(environment.apiURL+"/api/buscarTrabajo"+"/"+id);
  }

  updateExperiencia(experiencia:Experiencia){
    return this.http.put<Experiencia>(environment.apiURL+"/api/editarExperiencia"+"/"+experiencia.id,experiencia);
  }

  login(creds: Credentials){
    return this.http.post(environment.apiURL+'/login',creds,{
      observe:'response' //devuelve la respuesta completa, no solo el body
    }).pipe(map((response: HttpResponse<any>)=>{
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ','');

      localStorage.setItem('token', token);

      return body;
    }))
  }

  getToken(){
    return localStorage.getItem('token');
  }
  

}
