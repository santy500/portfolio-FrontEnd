import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-list-progreso',
  templateUrl: './list-progreso.component.html',
  styleUrls: ['./list-progreso.component.css']
})
export class ListProgresoComponent implements OnInit {
  progresos:any;
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get(environment.apiURL+"/api/verProgresos", {responseType:"json"}).subscribe((resp:any) =>{
      
      this.progresos=resp;
      }
    
    )
  }

  Editar(id:number){
    localStorage.setItem('id', id.toString());
    this.router.navigate(["editProgreso"]);
    
  }

  Eliminar(id:number){
    this.router.navigate(["eliminarProgreso"]);
    this.http.delete(environment.apiURL+"/api/borrarProgreso/"+id).subscribe(data=>{
      alert("Habilidad Eliminada con exito");
      this.router.navigate(["listProgreso"]);
    });
    
    
  }

}
