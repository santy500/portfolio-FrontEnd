import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-estudios',
  templateUrl: './crud-estudios.component.html',
  styleUrls: ['./crud-estudios.component.css']
})
export class CrudEstudiosComponent implements OnInit {

  constructor(private router:Router) { }

  Listar(){
    this.router.navigate(["listEstudios"]);
  }

  Agregar(){
    this.router.navigate(["addEstudios"]);
  }

  ngOnInit(): void {
  }

}
