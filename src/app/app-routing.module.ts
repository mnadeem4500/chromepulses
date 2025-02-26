import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShinjiruComponent } from './main-shinjiru/main-shinjiru.component';

const routes: Routes = [
  { path: '', component:MainShinjiruComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
