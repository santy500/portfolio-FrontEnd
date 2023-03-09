import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-info-personal',
  templateUrl: './crud-info-personal.component.html',
  styleUrls: ['./crud-info-personal.component.css']
})
export class CrudInfoPersonalComponent implements OnInit {

  constructor(private router:Router) { }

  Listar(){
    this.router.navigate(["listarInfo"]);
  }


  ngOnInit(): void {
  }

}
