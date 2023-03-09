import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-experiencia',
  templateUrl: './crud-experiencia.component.html',
  styleUrls: ['./crud-experiencia.component.css']
})
export class CrudExperienciaComponent implements OnInit {

  constructor(private router:Router) { }

  Listar(){
    this.router.navigate(["listarExperiencia"]);
  }

  Agregar(){
    this.router.navigate(["addExperiencia"]);
  }

  ngOnInit(): void {
  }

}
