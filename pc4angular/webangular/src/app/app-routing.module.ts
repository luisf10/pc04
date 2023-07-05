import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerbotComponent } from './componentes/computerbot/computerbot.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { ProductosGamersComponent } from './componentes/productos-gamers/productos-gamers.component';
import { ProductosOtrosComponent } from './componentes/productos-otros/productos-otros.component';
import { ProductosPcsComponent } from './componentes/productos-pcs/productos-pcs.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
 

const routes: Routes = [
  {path:'',redirectTo:'/sobremi',pathMatch:'full'},
  {path:'sobremi', component: SobremiComponent},
  {path:'computerbot', component: ComputerbotComponent},
  {path:'productos-gamers', component: ProductosGamersComponent},
  {path:'productos-pcs', component: ProductosPcsComponent},
  {path:'productos-otros', component: ProductosOtrosComponent},
  {path:'contactenos', component: ContactenosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
