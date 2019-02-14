import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableServiceService } from './table-service.service';
import { NumberPipe } from './number.pipe';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NumberPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [TableServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
