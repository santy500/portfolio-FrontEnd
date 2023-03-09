import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})




export class ProgresoComponent implements OnInit {
  progresoList:any;
  progresos:any;
  progresosSoft:any;
  constructor( private datosPortfolio:PortfolioService, private http:HttpClient ) { 

  }
    
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.progresoList=data.progreso;
    });

    this.http.get(environment.apiURL+"/api/verProgresos", {responseType:"json"}).subscribe((resp:any) =>{
      
      this.progresos=resp;
      
      }
    
    )

    this.http.get(environment.apiURL+"/api/verProgresosSoft", {responseType:"json"}).subscribe((resp:any) =>{
      
      this.progresosSoft=resp;
      
      }
    
    )

  }

}

