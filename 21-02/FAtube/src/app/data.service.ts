import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface DataList {
  items: [
    {
      id: {
        videoId: string;
      };
      snippet: {
        publishedAt: string;
        title: string;
        description: string;
        thumbnails: {
          high: {
            url: string;
          };
        };
      };
    }
  ];
}
export interface DataDetail {
  items: [
    {
      snippet: {
        channelTitle: string;
        description: string;
        publishedAt: string;
        title: string;
      };
      statistics: {
        commentCount: string;
        dislikeCount: string;
        favoriteCount: string;
        likeCount: string;
        viewCount: string;
      }
  }
];
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://www.googleapis.com/youtube/v3/search';
  url_VideoList = 'https://www.googleapis.com/youtube/v3/videos';
  key_Api = 'AIzaSyDl3q38wTzJKclQmaFWUCeQyxA6tSwa3Kk';
  data: DataList;
  detail: DataDetail;
  constructor(private httpClient: HttpClient) {}
  // tslint:disable-next-line:use-life-cycle-interface
  getList(order, search) {
    return this.httpClient.get(this.url, {
      params: {
        order: order,
        maxResults: '25',
        part: 'snippet',
        q: search,
        type: 'video',
        key: this.key_Api
      }
    });
  }

  getDetail(id: string) {
    return this.httpClient.get(this.url_VideoList, {
      params: {
        part: 'snippet,statistics',
        id: id,
        key: this.key_Api
      }
    });
  }
}
