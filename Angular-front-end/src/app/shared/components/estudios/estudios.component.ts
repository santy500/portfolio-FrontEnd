import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudiosList:any;
  estudios:any;
  constructor(private datosPortfolio:PortfolioService, private http:HttpClient) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.estudiosList=data.estudios;
    });
    
    this.http.get(environment.apiURL+"/api/verEstudios", {responseType:"json"}).subscribe((resp:any) =>{
      
      this.estudios=resp;
      
      }
    
    )
  }

}
