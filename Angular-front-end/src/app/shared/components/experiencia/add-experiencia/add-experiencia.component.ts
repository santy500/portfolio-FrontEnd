import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GuardsCheckStart, Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelo/Experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  experiencia: Experiencia = new Experiencia();
  
  constructor(private router:Router, private service:PortfolioService, private http:HttpClient) { }

  
  

  ngOnInit(): void {
  }

  
  Guardar(){
    return this.http.post<Experiencia>(environment.apiURL+"/api/new/trabajo", this.experiencia).subscribe(data=>{
      alert("Se agrego con exito")
      this.router.navigate(["listarExperiencia"])
    });
    
  }

}
