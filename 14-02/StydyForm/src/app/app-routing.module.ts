import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {path: 'template', component: TemplateComponent},
  {path: 'reactive', component: ReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
