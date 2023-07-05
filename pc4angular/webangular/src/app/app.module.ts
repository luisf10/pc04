import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { ComputerbotComponent } from './componentes/computerbot/computerbot.component';
import { ProductosGamersComponent } from './componentes/productos-gamers/productos-gamers.component';
import { ProductosPcsComponent } from './componentes/productos-pcs/productos-pcs.component';
import { ProductosOtrosComponent } from './componentes/productos-otros/productos-otros.component';
import { NavmenuComponent } from './componentes/navmenu/navmenu.component';
import { PiepaginaComponent } from './componentes/piepagina/piepagina.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SobremiComponent,
    ComputerbotComponent,
    ProductosGamersComponent,
    ProductosPcsComponent,
    ProductosOtrosComponent,
    NavmenuComponent,
    PiepaginaComponent,
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
