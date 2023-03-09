import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-habilidades-blandas',
  templateUrl: './crud-habilidades-blandas.component.html',
  styleUrls: ['./crud-habilidades-blandas.component.css']
})
export class CrudHabilidadesBlandasComponent implements OnInit {

  constructor(private router:Router) { }

  Listar(){
    this.router.navigate(["listHabilidadesBlandas"]);
  }

  Agregar(){
    this.router.navigate(["addHabilidadesBlandas"]);
  }

  ngOnInit(): void {
  }

}
