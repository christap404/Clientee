import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule, routing } from './app.routing';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { ErrorComponent } from './componentes/error/error.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NovedadesComponent } from './componentes/novedades/novedades.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { environment } from 'src/environments/environment';
import { SabermasComponent } from './componentes/sabermas/sabermas.component';

/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NewsComponent } from './components/news/news.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AdministratorsComponent } from './components/administrators/administrators.component';
import { ErrorComponent } from './components/error/error.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';*/

@NgModule({
  declarations: [
    AppComponent,
    FavoritosComponent,
    InicioComponent,
    NovedadesComponent,
    ProductosComponent,
    SabermasComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    appRoutingProviders
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
