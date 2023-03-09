import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-progreso',
  templateUrl: './crud-progreso.component.html',
  styleUrls: ['./crud-progreso.component.css']
})
export class CrudProgresoComponent implements OnInit {

  constructor(private router:Router) { }

  Listar(){
    this.router.navigate(["listProgreso"]);
  }

  Agregar(){
    this.router.navigate(["addProgreso"]);
  }

  ngOnInit(): void {
  }

}
