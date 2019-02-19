import { Component, OnInit } from '@angular/core';
import { GetDataService, Track } from './get-data.service';
import { HttpParams } from '@angular/common/http';
class Image {
  height: number;
  url: string;
  width: number;
  constructor(height: number, url: string, width: number) {
    this.height = height;
    this.url = url;
    this.width = width;
  }
}
class Res {
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: 'artist';
  uri: string;
  constructor(images: Image[]) {
    this.images = images;
  }
}
class Artist {
  href: string;
  items: Res[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}
class Artists {
  artists: Artist;
  constructor(artists: Artist) {
    this.artists = artists;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url = 'https://api.spotify.com/v1/search';
  data: Artists;
  param: HttpParams;
  search: string;
  a: Res[];
  b: any;
  trackLink: string;
  constructor(private getData: GetDataService) {
    this.a = [new Res([new Image(0, '', 0)])];
    this.data = new Artists(new Artist());
  }

  ngOnInit() {

  }
  searchMusic(event) {
    if (event.key === 'Enter') {
      if (this.search === '') {
        this.param = new HttpParams().set('q', undefined).set('type', 'artist');
      } else {
        this.param = new HttpParams().set('q', this.search).set('type', 'artist');
      }
      this.getData.getImage(this.url, this.param).subscribe((res: Artists) => {
        this.getData.setTracks(new Track());
        this.data = res;
        this.a = this.data.artists.items;
      });
    }
  }
  sendData(item) {
    // tslint:disable-next-line:max-line-length
    this.getData.getData(`https://api.spotify.com/v1/artists/${item}/top-tracks?country=VN`).subscribe(res => {
      this.getData.setTracks(res);
      console.log(res);
    });
  }
}
