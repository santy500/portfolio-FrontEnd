import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudiosComponent } from './shared/components/estudios/estudios.component';
import { ExperienciaComponent } from './shared/components/experiencia/experiencia.component';
import { InfoPersonalComponent } from './shared/components/info-personal/info-personal.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { ProgresoComponent } from './shared/components/progreso/progreso.component';
import { ProyectosComponent } from './shared/components/proyectos/proyectos.component';
import { CrudInfoPersonalComponent } from './shared/components/crud-info-personal/crud-info-personal.component';
import { CrudExperienciaComponent } from './shared/components/crud-experiencia/crud-experiencia.component';
import { ListarComponent } from './shared/components/info-personal/listar/listar.component';
import { ListarExperienciaComponent } from './shared/components/experiencia/listar-experiencia/listar-experiencia.component';
import { EditExperienciaComponent } from './shared/components/experiencia/edit-experiencia/edit-experiencia.component';
import { AddExperienciaComponent } from './shared/components/experiencia/add-experiencia/add-experiencia.component';
import { EditComponent } from './shared/components/info-personal/edit/edit.component';
import { AddEstudiosComponent } from './shared/components/estudios/add-estudios/add-estudios.component';
import { EditEstudiosComponent } from './shared/components/estudios/edit-estudios/edit-estudios.component';
import { ListEstudiosComponent } from './shared/components/estudios/list-estudios/list-estudios.component';
import { AddProgresoComponent } from './shared/components/progreso/add-progreso/add-progreso.component';
import { EditProgresoComponent } from './shared/components/progreso/edit-progreso/edit-progreso.component';
import { ListProgresoComponent } from './shared/components/progreso/list-progreso/list-progreso.component';
import { AddProyectosComponent } from './shared/components/proyectos/add-proyectos/add-proyectos.component';
import { EditProyectosComponent } from './shared/components/proyectos/edit-proyectos/edit-proyectos.component';
import { ListProyectosComponent } from './shared/components/proyectos/list-proyectos/list-proyectos.component';
import { CrudEstudiosComponent } from './shared/components/crud-estudios/crud-estudios.component';
import { CrudProgresoComponent } from './shared/components/crud-progreso/crud-progreso.component';
import { CrudProyectosComponent } from './shared/components/crud-proyectos/crud-proyectos.component';
import { LoginComponent } from './shared/components/login/login.component';
import { CrudComponent } from './shared/components/crud/crud.component';
import { AuthGuard } from './helpers/auth.guard';
import { AddHabilidadesBlandasComponent } from './shared/components/progreso/add-habilidades-blandas/add-habilidades-blandas.component';
import { EditHabilidadesBlandasComponent } from './shared/components/progreso/edit-habilidades-blandas/edit-habilidades-blandas.component';
import { ListHabilidadesBlandasComponent } from './shared/components/progreso/list-habilidades-blandas/list-habilidades-blandas.component';
import { CrudHabilidadesBlandasComponent } from './shared/components/crud-habilidades-blandas/crud-habilidades-blandas.component';


const routes: Routes = [
  {path: '',redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component:InfoPersonalComponent},
  {path:'experiencia', component:ExperienciaComponent},
  {path:'estudios',component:EstudiosComponent},
  {path:'progreso', component:ProgresoComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'crudInfoPersonal', component:CrudInfoPersonalComponent, canActivate:[AuthGuard]},
  {path: 'crudExperiencia', component:CrudExperienciaComponent, canActivate:[AuthGuard]},
  {path:'crudEstudios', component:CrudEstudiosComponent, canActivate:[AuthGuard]},
  {path:'crudProgreso', component:CrudProgresoComponent, canActivate:[AuthGuard]},
  {path:'crudHabilidadesBlandas', component:CrudHabilidadesBlandasComponent, canActivate:[AuthGuard]},
  {path:'crudProyectos', component:CrudProyectosComponent, canActivate:[AuthGuard]},
  {path:'listarInfo',component:ListarComponent, canActivate:[AuthGuard]},
  {path:'editarInfo', component:EditComponent, canActivate:[AuthGuard]},
  {path:'listarExperiencia', component:ListarExperienciaComponent, canActivate:[AuthGuard]},
  {path:'eliminarExperiencia', component:ListarExperienciaComponent, canActivate:[AuthGuard]},
  {path:'editExperiencia',component:EditExperienciaComponent, canActivate:[AuthGuard]},
  {path:'addExperiencia', component:AddExperienciaComponent, canActivate:[AuthGuard]},
  {path:'addEstudios', component:AddEstudiosComponent, canActivate:[AuthGuard]},
  {path:'editEstudios', component:EditEstudiosComponent, canActivate:[AuthGuard]},
  {path:'listEstudios', component:ListEstudiosComponent, canActivate:[AuthGuard]},
  {path:'eliminarEstudios', component:ListEstudiosComponent, canActivate:[AuthGuard]},
  {path:'addProgreso', component:AddProgresoComponent, canActivate:[AuthGuard]},
  {path:'editProgreso', component:EditProgresoComponent, canActivate:[AuthGuard]},
  {path:'listProgreso', component:ListProgresoComponent, canActivate:[AuthGuard]},
  {path:'eliminarProgreso', component:ListProgresoComponent, canActivate:[AuthGuard]},
  {path:'addHabilidadesBlandas', component:AddHabilidadesBlandasComponent, canActivate:[AuthGuard]},
  {path:'editHabilidadesBlandas', component:EditHabilidadesBlandasComponent, canActivate:[AuthGuard]},
  {path:'listHabilidadesBlandas', component:ListHabilidadesBlandasComponent, canActivate:[AuthGuard]},
  {path:'eliminarHabilidadesBlandas', component:ListHabilidadesBlandasComponent, canActivate:[AuthGuard]},
  {path:'addProyecto', component:AddProyectosComponent, canActivate:[AuthGuard]},
  {path:'editProyecto', component:EditProyectosComponent, canActivate:[AuthGuard]},
  {path:'listProyecto', component:ListProyectosComponent, canActivate:[AuthGuard]},
  {path:'eliminarProyecto',component:ListProyectosComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'crud', component:CrudComponent , canActivate:[AuthGuard]},
  {path:'**', component:PagenotfoundComponent}
  
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
