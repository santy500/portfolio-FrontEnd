import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgresoSoft } from 'src/app/Modelo/ProgresoSoft';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-add-habilidades-blandas',
  templateUrl: './add-habilidades-blandas.component.html',
  styleUrls: ['./add-habilidades-blandas.component.css']
})
export class AddHabilidadesBlandasComponent implements OnInit {
  progresoSoft:ProgresoSoft=new ProgresoSoft();

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  Guardar(){
    return this.http.post<ProgresoSoft>(environment.apiURL+"/api/new/progresoSoft", this.progresoSoft).subscribe(data=>{
      alert("Se agrego con exito")
      this.router.navigate(["listHabilidadesBlandas"])
    });
    
  }
}
