import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Progreso } from 'src/app/Modelo/Progreso';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-edit-progreso',
  templateUrl: './edit-progreso.component.html',
  styleUrls: ['./edit-progreso.component.css']
})
export class EditProgresoComponent implements OnInit {
  progreso:Progreso=new Progreso();
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    this.http.get(environment.apiURL+"/api/buscarProgreso/"+localStorage.getItem('id'),{responseType:"json"}).subscribe((resp:any) =>{
      
    this.progreso=resp;
    })
    
  }
  
  Actualizar(){
    this.http.put<Progreso>(environment.apiURL+"/api/edit/progreso/"+localStorage.getItem('id'),this.progreso).subscribe();
    alert("Se actualizo con exito");
    this.router.navigate(["listProgreso"]);
  }

}
