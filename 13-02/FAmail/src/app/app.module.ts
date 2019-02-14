import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { ContactComponent } from './contact/contact.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { MessageChildComponent } from './message-child/message-child.component';
import { UserService } from './user.service';
import { DataService } from './data.service';
import { MessageBodyComponent } from './message-body/message-body.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ContactComponent,
    PreferencesComponent,
    MessageChildComponent,
    MessageBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
