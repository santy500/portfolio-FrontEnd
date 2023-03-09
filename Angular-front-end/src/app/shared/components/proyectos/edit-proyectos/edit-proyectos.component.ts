import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelo/Proyecto';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proyecto:Proyecto=new Proyecto();
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    this.http.get(environment.apiURL+"/api/buscarProyecto/"+localStorage.getItem('id'),{responseType:"json"}).subscribe((resp:any) =>{
      
    this.proyecto=resp;
    })
    
  }

  Actualizar(){
    this.http.put<Proyecto>(environment.apiURL+"/api/edit/proyecto/"+localStorage.getItem('id'),this.proyecto).subscribe();
    alert("Se actualizo con exito");
    this.router.navigate(["listProyecto"]);
  }

}
