import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { ContactComponent } from './contact/contact.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { MessageChildComponent } from './message-child/message-child.component';
import { MessageBodyComponent } from './message-body/message-body.component';

const routes: Routes = [
  {path: 'message', component: MessageComponent, children: [
    {path: ':messageChild', component: MessageChildComponent, children: [
      {path: ':id', component: MessageBodyComponent}
    ]}
  ]},
  {path: 'contact', component: ContactComponent},
  {path: 'preferences', component: PreferencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
