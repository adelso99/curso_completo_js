//importar los modulos de router de angular

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importacion de los componentes
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';

//Arrays de las rutas 
const appRoutes: Routes = [
    {path: '', component:  HomeComponent},
    {path: 'home', component:  HomeComponent},
    {path: 'zapatillas', component:  ZapatillasComponent},
    {path: 'videojuego', component:  VideojuegoComponent},
    {path: 'cursos', component:  CursosComponent},
    {path: 'cursos/:nombre/:followers', component:  CursosComponent},
    {path: '**', component: HomeComponent}

];

//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
