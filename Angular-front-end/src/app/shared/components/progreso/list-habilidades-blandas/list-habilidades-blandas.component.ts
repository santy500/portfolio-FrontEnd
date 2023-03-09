import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-list-habilidades-blandas',
  templateUrl: './list-habilidades-blandas.component.html',
  styleUrls: ['./list-habilidades-blandas.component.css']
})
export class ListHabilidadesBlandasComponent implements OnInit {
  progresosSoft:any;
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get(environment.apiURL+"/api/verProgresosSoft", {responseType:"json"}).subscribe((resp:any) =>{
      
      this.progresosSoft=resp;
      }
    
    )
  }

  Editar(id:number){
    localStorage.setItem('id', id.toString());
    this.router.navigate(["editHabilidadesBlandas"]);
    
  }

  Eliminar(id:number){
    this.router.navigate(["eliminarHabilidadesBlandas"]);
    this.http.delete(environment.apiURL+"/api/borrarProgresoSoft/"+id).subscribe(data=>{
      alert("Habilidad Eliminada con exito");
      this.router.navigate(["listHabilidadesBlandas"]);
    });
    
    
  }

}
