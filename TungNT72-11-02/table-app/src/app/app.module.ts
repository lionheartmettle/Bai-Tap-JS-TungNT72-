import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableServiceService } from './table-service.service';
import { NumberPipe } from './number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TableServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
