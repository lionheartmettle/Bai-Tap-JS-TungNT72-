import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-message-body',
  templateUrl: './message-body.component.html',
  styleUrls: ['./message-body.component.css']
})
export class MessageBodyComponent implements OnInit {
  id: string;
  body: string;
  subject: string;
  from: string;
  to: string;
  constructor(private rout: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.rout.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      // tslint:disable-next-line:no-unused-expression
      this.data.getData().map(n => {if (n._id === this.id) {
        this.from = n.from;
        this.to = n.to;
        this.subject = n.subject;
        this.body = n.body;
      }});
    });
  }

}
