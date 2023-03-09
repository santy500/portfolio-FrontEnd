import { formatNumber } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelo/Experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  experiencia:Experiencia= new Experiencia();
  constructor(private router:Router, private service:PortfolioService, private http:HttpClient) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    this.http.get(environment.apiURL+"/api/buscarTrabajo/"+localStorage.getItem('id'),{responseType:"json"}).subscribe((resp:any) =>{
      
    this.experiencia=resp;
    })
    
  }
  
  ActualizarExperiencia(){
    this.http.put<Experiencia>(environment.apiURL+"/api/edit/trabajo/"+localStorage.getItem('id'),this.experiencia).subscribe();
    alert("Se actualizo con exito");
    this.router.navigate(["listarExperiencia"]);
  }

}
