import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { AProposComponent } from './apropos/apropos.component';

const routes: Routes = [
  {path: "accueil", component: AccueilComponent},
  {path: "apropos", component: AProposComponent},
  {path: "contact", component: ContactComponent},
  {path: "", component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
