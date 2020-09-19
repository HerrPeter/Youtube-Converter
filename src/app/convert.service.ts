import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { createWriteStream } from 'fs';
import ytdl from 'ytdl-core';

// const fs = require('fs');
// const ytdl = require('ytdl-core');

@Injectable({
  providedIn: 'root',
})
export class ConvertService {
  // constructor(private http: HttpClient) {}

  toMp3() {
    ytdl('https://www.youtube.com/watch?v=tDTQQWSmo8s').pipe(
      createWriteStream('Video.flv')
    );

    // let id: string = this.getVideoId(url);

    // return this.http.get(`https://www.yt-download.org/api/button/mp3/${id}`);
  }

  getVideoId(url: string) {
    return '9x1MZEDQbtA';
  }
}
