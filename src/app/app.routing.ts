import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NovedadesComponent } from './componentes/novedades/novedades.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ErrorComponent } from './componentes/error/error.component';
import { SabermasComponent } from './componentes/sabermas/sabermas.component';

const appRoutes: Routes = [
    {path : '', component: InicioComponent},
    {path: 'sabermas', component: SabermasComponent},
    { path: 'inicio', component: InicioComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'novedades', component: NovedadesComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: '**', component: ErrorComponent }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
