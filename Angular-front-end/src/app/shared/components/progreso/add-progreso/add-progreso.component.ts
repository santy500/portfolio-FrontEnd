import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Progreso } from 'src/app/Modelo/Progreso';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-add-progreso',
  templateUrl: './add-progreso.component.html',
  styleUrls: ['./add-progreso.component.css']
})
export class AddProgresoComponent implements OnInit {
  progreso:Progreso=new Progreso();
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  Guardar(){
    return this.http.post<Progreso>(environment.apiURL+"/api/new/progreso", this.progreso).subscribe(data=>{
      alert("Se agrego con exito")
      this.router.navigate(["listProgreso"])
    });
    
  }
}
