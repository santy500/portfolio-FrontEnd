import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-list-estudios',
  templateUrl: './list-estudios.component.html',
  styleUrls: ['./list-estudios.component.css']
})
export class ListEstudiosComponent implements OnInit {
  estudios:any;
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.http.get(environment.apiURL+"/api/verEstudios", {responseType:"json"}).subscribe((resp:any) =>{
      
      this.estudios=resp;
      }
    
    )
  }

  Editar(id:number){
    localStorage.setItem('id', id.toString());
    this.router.navigate(["editEstudios"]);
    
  }

  Eliminar(id:number){
    this.router.navigate(["eliminarEstudios"]);
    this.http.delete(environment.apiURL+"/api/borrarEstudio/"+id).subscribe(data=>{
      alert("Estudio Eliminado con exito");
      this.router.navigate(["listEstudios"]);
    });
    
    
  }

}
