import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  trabajos:any;
  constructor(private datosPortfolio: PortfolioService, private http:HttpClient ) { }

  ngOnInit():void{

    this.http.get(environment.apiURL+"/api/verTrabajos", {responseType:"json"}).subscribe((resp:any) =>{
      this.trabajos=resp;
      }
    )
  }

}
