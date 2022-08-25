import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { InfoPersonalComponent } from './shared/components/info-personal/info-personal.component';
import { ExperienciaComponent } from './shared/components/experiencia/experiencia.component';
import { EstudiosComponent } from './shared/components/estudios/estudios.component';
import { ProgresoComponent } from './shared/components/progreso/progreso.component';
import { ProyectosComponent } from './shared/components/proyectos/proyectos.component';
import { HttpClientModule}  from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoPersonalComponent,
    ExperienciaComponent,
    EstudiosComponent,
    ProgresoComponent,
    ProyectosComponent,
    PagenotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
