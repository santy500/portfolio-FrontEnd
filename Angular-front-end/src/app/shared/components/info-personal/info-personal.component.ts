import { Component, Injectable, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})



export class InfoPersonalComponent {
  titulo='';
  descripcion='';
  imagen='';
  fondo='';
  constructor(private datosPortfolio:PortfolioService, private http:HttpClient)  { }
  
  ngOnInit(){
    this.http.get(environment.apiURL+"/api/verDescripcion", {responseType:'json'}).subscribe((resp:any) =>{
    this.titulo = resp.titulo;
    this.descripcion = resp.descripcion;
    this.imagen = "assets/img/"+resp.imagen;
    this.fondo = "assets/img/"+resp.fondo;
    }
    )
  }

}

