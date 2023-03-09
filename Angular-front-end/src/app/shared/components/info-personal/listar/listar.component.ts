import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  descripcion:any;
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get(environment.apiURL+"/api/verDescripcion", {responseType:"json"}).subscribe((resp:any) =>{
      
      this.descripcion=resp;
      }
    
    )
  }

  Editar(id:number){
    localStorage.setItem('id', id.toString());
    this.router.navigate(["editarInfo"]);
    
  }
  

}
