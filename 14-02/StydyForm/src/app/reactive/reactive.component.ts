import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { agePosible } from '../validate/agePosible';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  listRoll = ['Student', 'Full Time Job', 'Full Time Learner', 'Prefer not to say', 'Other'];
  arrCheck = [
    {id: 100, value: 'Front-end Projects'},
    {id: 200, value: 'Back-end Projects'},
    {id: 300, value: 'Data Visualization'}
  ];

  myForm: FormGroup;
  constructor() {
    const controls = this.arrCheck.map(c => new FormControl(false));
    controls[0].setValue(true);

    this.myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, agePosible]),
    selectRoll: new FormControl(),
    radio: new FormControl('', [Validators.required]),
    selectFCC: new FormControl(),
    arrCheck: new FormArray(controls),
    comment: new FormControl()
  });
    this.myForm.controls.selectRoll.setValue('x');
  }

  ngOnInit() {
  }
  onSubmit() {
    const selectedOrderIds = this.myForm.value.arrCheck
      .map((v, i) => v ? this.arrCheck[i].id : null)
      .filter(v => v !== null);

    console.log(this.myForm);
  }
}
