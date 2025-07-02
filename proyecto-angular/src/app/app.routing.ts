import { ModuleWithProviders } from "@angular/core"; 
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

//Deificion de Rutas
const appRoutes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'Sobre-Mi', component: AboutComponent},
    {path: 'Proyectos', component: ProjectsComponent},
    {path: 'Crear-Proyecto', component: CreateComponent},
    {path: 'Contacto', component: ContactComponent},
    {path: '**', component: ErrorComponent},
    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/*
Progress ....1
*/
/*
Progress ....2
*/
/*
Progress ....3
*/
