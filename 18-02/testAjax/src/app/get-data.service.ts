import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
export class Track {
  tracks: [{
    name: string;
    preview_url: string;
  }];
}
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  tracks = new Track();
  constructor(private httpClient: HttpClient) { }
  public getImage(url: string, obj: HttpParams): Observable<any> {
    return this.httpClient.get(url, {params: obj});
  }
  public getData(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
  setTracks(items) {
    this.tracks = items;
  }
}
