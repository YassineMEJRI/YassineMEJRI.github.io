import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FourOhFourComponent} from "./four-oh-four/four-oh-four.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '404', component: FourOhFourComponent},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
