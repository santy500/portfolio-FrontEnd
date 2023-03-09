import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { InfoPersonalComponent } from './shared/components/info-personal/info-personal.component';
import { ExperienciaComponent } from './shared/components/experiencia/experiencia.component';
import { EstudiosComponent } from './shared/components/estudios/estudios.component';
import { ProgresoComponent } from './shared/components/progreso/progreso.component';
import { ProyectosComponent } from './shared/components/proyectos/proyectos.component';
import { HttpClientModule, HTTP_INTERCEPTORS}  from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ListarComponent } from './shared/components/info-personal/listar/listar.component';
import { AddComponent } from './shared/components/info-personal/add/add.component';
import { EditComponent } from './shared/components/info-personal/edit/edit.component';
import { CrudInfoPersonalComponent } from './shared/components/crud-info-personal/crud-info-personal.component';
import { CrudExperienciaComponent } from './shared/components/crud-experiencia/crud-experiencia.component';
import { ListarExperienciaComponent } from './shared/components/experiencia/listar-experiencia/listar-experiencia.component';
import { EditExperienciaComponent } from './shared/components/experiencia/edit-experiencia/edit-experiencia.component';
import { AddExperienciaComponent } from './shared/components/experiencia/add-experiencia/add-experiencia.component';
import { CrudEstudiosComponent } from './shared/components/crud-estudios/crud-estudios.component';
import { CrudProgresoComponent } from './shared/components/crud-progreso/crud-progreso.component';
import { CrudProyectosComponent } from './shared/components/crud-proyectos/crud-proyectos.component';
import { AddEstudiosComponent } from './shared/components/estudios/add-estudios/add-estudios.component';
import { EditEstudiosComponent } from './shared/components/estudios/edit-estudios/edit-estudios.component';
import { ListEstudiosComponent } from './shared/components/estudios/list-estudios/list-estudios.component';
import { EditProgresoComponent } from './shared/components/progreso/edit-progreso/edit-progreso.component';
import { AddProgresoComponent } from './shared/components/progreso/add-progreso/add-progreso.component';
import { ListProgresoComponent } from './shared/components/progreso/list-progreso/list-progreso.component';
import { ListProyectosComponent } from './shared/components/proyectos/list-proyectos/list-proyectos.component';
import { AddProyectosComponent } from './shared/components/proyectos/add-proyectos/add-proyectos.component';
import { EditProyectosComponent } from './shared/components/proyectos/edit-proyectos/edit-proyectos.component';
import { LoginComponent } from './shared/components/login/login.component';
import { CrudComponent } from './shared/components/crud/crud.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { AddHabilidadesBlandasComponent } from './shared/components/progreso/add-habilidades-blandas/add-habilidades-blandas.component';
import { EditHabilidadesBlandasComponent } from './shared/components/progreso/edit-habilidades-blandas/edit-habilidades-blandas.component';
import { ListHabilidadesBlandasComponent } from './shared/components/progreso/list-habilidades-blandas/list-habilidades-blandas.component';
import { CrudHabilidadesBlandasComponent } from './shared/components/crud-habilidades-blandas/crud-habilidades-blandas.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoPersonalComponent,
    ExperienciaComponent,
    EstudiosComponent,
    ProgresoComponent,
    ProyectosComponent,
    PagenotfoundComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    CrudInfoPersonalComponent,
    CrudExperienciaComponent,
    ListarExperienciaComponent,
    EditExperienciaComponent,
    AddExperienciaComponent,
    CrudEstudiosComponent,
    CrudProgresoComponent,
    CrudProyectosComponent,
    AddEstudiosComponent,
    EditEstudiosComponent,
    ListEstudiosComponent,
    EditProgresoComponent,
    AddProgresoComponent,
    ListProgresoComponent,
    ListProyectosComponent,
    AddProyectosComponent,
    EditProyectosComponent,
    LoginComponent,
    CrudComponent,
    AddHabilidadesBlandasComponent,
    EditHabilidadesBlandasComponent,
    ListHabilidadesBlandasComponent,
    CrudHabilidadesBlandasComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
    }
    
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
