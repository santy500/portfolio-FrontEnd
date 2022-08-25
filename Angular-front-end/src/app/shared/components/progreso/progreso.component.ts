import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})




export class ProgresoComponent implements OnInit {
  progresoList:any;
  constructor( private datosPortfolio:PortfolioService ) { 

  }
    
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.progresoList=data.progreso;
    });
  }

}

