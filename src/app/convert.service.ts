import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { BE_SERVER } from '../constants';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class ConvertService {
  constructor(private http: HttpClient) {}

  toMp3() {
    // let http: HttpClient;

    window.location.href =
      'http://localhost:3333/single?url=https://www.youtube.com/watch?v=GAt0Wd-yYu4';

    // let res = this.http
    //   .get(
    //     `http://localhost:3333/single?url=https://www.youtube.com/watch?v=GAt0Wd-yYu4`,
    //     { responseType: 'arraybuffer' }
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    // console.log(res);
  }

  downloadSingle(url: string, audioOnly: boolean) {
    let userUrl: String = new String(url);
    let downUrl: String = new String(
      `${BE_SERVER.DOMAIN}/${BE_SERVER.REQUESTS.SINGLE_DOWNLOAD}?url=${userUrl}&audioOnly=${audioOnly}`
    );

    // Navigate to the download link. (NEED TO HANDLE INVALID URL ENTRIES).
    // --> Consider doing a get request, returns the same valid url, then redirects to the url
    window.location.href = <string>downUrl;
  }

  downloadPlaylist(url: string, audioOnly: boolean) {
    console.log('Downloading playlist');
    console.log(`- Url: ${url}`);
    console.log(`- Audio Only: ${audioOnly}`);
  }

  getVideoId(url) {
    return '9x1MZEDQbtA';
  }
}
