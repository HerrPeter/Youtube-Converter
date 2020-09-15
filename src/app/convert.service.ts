import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConvertService {
  constructor(private http: HttpClient) {}

  toMp3(url: string) {
    let id: string = this.getVideoId(url);

    return this.http.get(`https://www.yt-download.org/api/button/mp3/${id}`);
  }

  getVideoId(url: string) {
    return '9x1MZEDQbtA';
  }
}
