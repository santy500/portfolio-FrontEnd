import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelo/Proyecto';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-add-proyectos',
  templateUrl: './add-proyectos.component.html',
  styleUrls: ['./add-proyectos.component.css']
})
export class AddProyectosComponent implements OnInit {
  proyecto:Proyecto=new Proyecto();
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  Guardar(){
    return this.http.post<Proyecto>(environment.apiURL+"/api/new/proyecto", this.proyecto).subscribe(data=>{
      alert("Se agrego con exito")
      this.router.navigate(["listProyecto"])
    });
    
  }

}
