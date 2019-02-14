import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';
import { UserService } from '../user.service';
interface Mes {
  folder: string;
  body: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  senderName: {last: string; first: string};
  corpus: string;
  _id: string;
}
@Component({
  selector: 'app-message-child',
  templateUrl: './message-child.component.html',
  styleUrls: ['./message-child.component.css']
})
export class MessageChildComponent implements OnInit {
  folder: string;
  dataC: Mes[];
  dataTem: Mes[];
  constructor(private rout: ActivatedRoute, private data: DataService, private userM: UserService) {
    this.dataC = this.data.getData();
  }

  ngOnInit() {
    this.rout.paramMap.subscribe((params: ParamMap) => {
      this.folder = params.get('messageChild');
      this.dataTem = this.dataC.filter(m => m.to === this.userM.us).filter(n => n.folder === this.folder);
    });
  }
  onChange() {
    this.rout.paramMap.subscribe((params: ParamMap) => {
      this.folder = params.get('messageChild');
      this.dataTem = this.dataC.filter(m => m.to === this.userM.us).filter(n => n.folder === this.folder);
    });
  }
}
