import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-proyectos',
  templateUrl: './crud-proyectos.component.html',
  styleUrls: ['./crud-proyectos.component.css']
})
export class CrudProyectosComponent implements OnInit {

  constructor(private router:Router) { }

  Listar(){
    this.router.navigate(["listProyecto"]);
  }

  Agregar(){
    this.router.navigate(["addProyecto"]);
  }

  ngOnInit(): void {
  }

}
