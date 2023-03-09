import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-list-proyectos',
  templateUrl: './list-proyectos.component.html',
  styleUrls: ['./list-proyectos.component.css']
})
export class ListProyectosComponent implements OnInit {
  proyectos:any;
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.apiURL+"/api/verProyectos", {responseType:"json"}).subscribe((resp:any) =>{
      
      this.proyectos=resp;
      }
    
    )
  }

  Editar(id:number){
    localStorage.setItem('id', id.toString());
    this.router.navigate(["editProyecto"]);
    
  }

  Eliminar(id:number){
    this.router.navigate(["eliminarProyecto"]);
    this.http.delete(environment.apiURL+"/api/borrarProyecto/"+id).subscribe(data=>{
      alert("Proyecto Eliminado con exito");
      this.router.navigate(["listProyecto"]);
    });
    
    
  }

}
