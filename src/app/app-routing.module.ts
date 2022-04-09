import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Passgen1Component } from './passgen1/passgen1.component';
import { Passgen2Component } from './passgen2/passgen2.component';

const routes: Routes = [
  { path: '', redirectTo: 'passgen1', pathMatch: 'full' },
  { path: 'passgen1', component: Passgen1Component },
  {
    path: 'passgen2',
    component: Passgen2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
