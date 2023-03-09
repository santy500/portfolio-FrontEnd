import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { descripcion } from 'src/app/Modelo/Descripcion';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  descripcion:descripcion=new descripcion();
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    this.http.get(environment.apiURL+"/api/verDescripcion",{responseType:"json"}).subscribe((resp:any) =>{
      
    this.descripcion=resp;
    })
    
  }
  
  Actualizar(){
    this.http.put<descripcion>(environment.apiURL+"/api/edit/descripcion",this.descripcion).subscribe();
    alert("Se actualizo con exito");
    this.router.navigate(["listarInfo"]);
  }

}
