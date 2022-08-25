import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudiosComponent } from './shared/components/estudios/estudios.component';
import { ExperienciaComponent } from './shared/components/experiencia/experiencia.component';
import { InfoPersonalComponent } from './shared/components/info-personal/info-personal.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { ProgresoComponent } from './shared/components/progreso/progreso.component';
import { ProyectosComponent } from './shared/components/proyectos/proyectos.component';

const routes: Routes = [
  {path: '',redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component:InfoPersonalComponent},
  {path:'experiencia', component:ExperienciaComponent},
  {path:'estudios',component:EstudiosComponent},
  {path:'progreso', component:ProgresoComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'**', component:PagenotfoundComponent}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
