import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  proyectosList:any;
  proyectos:any;
  
  constructor(private datosPortfolio:PortfolioService, private http:HttpClient) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.proyectosList=data.proyectos;
    });
    this.http.get(environment.apiURL+"/api/verProyectos", {responseType:"json"}).subscribe((resp:any) =>{
      
      this.proyectos=resp;
      }
    
    )
  }

}
