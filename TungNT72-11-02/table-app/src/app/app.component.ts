import { Component, OnInit } from '@angular/core';
import { TableServiceService } from './table-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A simple web app';
  data = [];
  counter = 'id';
  select = '';
  constructor(private tableService: TableServiceService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.data = this.tableService.getData().map(i => {
      i.phone = i.phone.replace(/-/g, '');
      i.phone = '(+84)'.concat(i.phone);
      return i;
    });
  }
}
