import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  descripcion:any;
  constructor(private datosPortfolio:PortfolioService, private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get(environment.apiURL+"/api/verDescripcion" , {responseType:'json'}).subscribe((resp:any) =>{
    this.descripcion = resp;
    }
    ),
    (error:any)=>{
      console.log(error)
    }

  }

  

  Enviar(){
    this.router.navigate(['crud']);
  }

  
  
}
