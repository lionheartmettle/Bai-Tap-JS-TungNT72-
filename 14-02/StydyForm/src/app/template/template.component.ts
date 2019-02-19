import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  listCheck = ['Front-end Projects', 'Back-end Projects', 'Data Visualization'];
  selectFCC = 'x';
  select = 'x';
  constructor() { }

  ngOnInit() {
  }
  onSubmit(myForm, check) {
    console.log(myForm);
    console.log(check);
  }

}
