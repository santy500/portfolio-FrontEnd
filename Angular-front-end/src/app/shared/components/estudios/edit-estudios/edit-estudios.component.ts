import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Estudio } from 'src/app/Modelo/Estudio';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-estudios',
  templateUrl: './edit-estudios.component.html',
  styleUrls: ['./edit-estudios.component.css']
})
export class EditEstudiosComponent implements OnInit {
  estudio:Estudio= new Estudio();
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    this.http.get(environment.apiURL+"/api/buscarEstudio/"+localStorage.getItem('id'),{responseType:"json"}).subscribe((resp:any) =>{
      
    this.estudio=resp;
    })
    
  }
  
  Actualizar(){
    this.http.put<Estudio>(environment.apiURL+"/api/edit/estudio/"+localStorage.getItem('id'),this.estudio).subscribe();
    alert("Se actualizo con exito");
    this.router.navigate(["listEstudios"]);
  }


}
