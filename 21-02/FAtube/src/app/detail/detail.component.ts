import { Component, OnInit, Inject } from '@angular/core';
import { DataService, DataDetail } from '../data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string;
  myUrl: string;
  constructor(private dataSearch: DataService,
    @Inject(MAT_DIALOG_DATA) public data, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.id = this.data.id;
    this.myUrl = `https://www.youtube.com/embed/${this.id}`;
    this.dataSearch.getDetail(this.id)
      .subscribe((res: DataDetail) => this.dataSearch.detail = res);
  }

}
