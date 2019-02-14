import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  folders = [
    'inbox',
    'finance',
    'travel',
    'personal',
    'spam',
    'drafts',
    'sent'
  ];
  constructor() {
  }

  ngOnInit() {

  }

}
