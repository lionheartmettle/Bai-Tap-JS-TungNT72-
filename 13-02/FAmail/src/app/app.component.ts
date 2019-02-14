import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FAmail';
  public user = '';
  constructor(private u: UserService) {}
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.u.setUser(this.user);
  }
  onchange() {
    this.u.setUser(this.user);
  }
}
