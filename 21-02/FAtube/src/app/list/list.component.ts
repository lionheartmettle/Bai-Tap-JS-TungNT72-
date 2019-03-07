import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() num: number;
  constructor(private dataSearch: DataService, public dialog: MatDialog) { }

  ngOnInit() {

  }
  openDialog(id): void {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '95%',
      data: {id: id}
    });
  }
}
