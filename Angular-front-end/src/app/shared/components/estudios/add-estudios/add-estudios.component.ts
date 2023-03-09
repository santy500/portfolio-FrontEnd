import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/Modelo/Estudio';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-add-estudios',
  templateUrl: './add-estudios.component.html',
  styleUrls: ['./add-estudios.component.css']
})
export class AddEstudiosComponent implements OnInit {
  estudio:Estudio=new Estudio();
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  Guardar(){
    return this.http.post<Estudio>(environment.apiURL+"/api/new/estudio", this.estudio).subscribe(data=>{
      alert("Se agrego con exito")
      this.router.navigate(["listEstudios"])
    });
    
  }

}
