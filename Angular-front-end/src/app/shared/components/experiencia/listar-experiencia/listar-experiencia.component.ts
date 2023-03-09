import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelo/Experiencia';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-listar-experiencia',
  templateUrl: './listar-experiencia.component.html',
  styleUrls: ['./listar-experiencia.component.css']
})
export class ListarExperienciaComponent implements OnInit {
  trabajos:any;
  
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {

    this.http.get(environment.apiURL+"/api/verTrabajos", {responseType:"json"}).subscribe((resp:any) =>{
      
      this.trabajos=resp;
      }
    
    )
  }

  Editar(id:number){
    localStorage.setItem('id', id.toString());
    this.router.navigate(["editExperiencia"]);
    
  }

  Eliminar(id:number){
    this.router.navigate(["eliminarExperiencia"]);
    this.http.delete(environment.apiURL+"/api/borrarTrabajo/"+id).subscribe(data=>{
      alert("Trabajo Eliminado con exito");
      this.router.navigate(["listarExperiencia"]);
    });
    
    
  }

}
