import { Component, OnInit } from '@angular/core';
import { DataService, DataList } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  value: string;
  selected: string;
  constructor(private dataSearch: DataService, private router: Router) {}

  ngOnInit() {
    this.selected = 'relevance';
    this.router.navigateByUrl('/');
  }
  input(event) {
    if (this.value === '') {
      this.dataSearch.data = undefined;
      this.dataSearch.detail = undefined;
      this.router.navigateByUrl('/');
    } else {
      if (event.key === 'Enter') {
        return this.dataSearch
          .getList(this.selected, this.value)
          .subscribe((res: DataList) => (this.dataSearch.data = res));
      }
    }
  }
  selectChange() {
    if (this.value) {
      console.log('kuck');
      return this.dataSearch
        .getList(this.selected, this.value)
        .subscribe((res: DataList) => (this.dataSearch.data = res));
    }
  }
  button() {
    this.value = '';
    this.dataSearch.data = undefined;
    this.dataSearch.detail = undefined;
    this.router.navigateByUrl('/');
  }
}
