import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { BE_SERVER } from '../constants';
import { query } from '@angular/animations';

interface IValidate_BE {
  isValid: boolean;
}

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

  async validateUrl(url: string, isSingle: boolean = true) {
    return new Promise<boolean>((isValid) => {
      this.http
        .get(
          `${BE_SERVER.DOMAIN}/${BE_SERVER.REQUESTS.VALIDATE_URL}?url=${url}&isSingle=${isSingle}`
        )
        .subscribe((data: IValidate_BE) => {
          isValid(data.isValid);
        });
    });
  }

  downloadSingle(url: string, audioOnly: boolean) {
    let userUrl: String = new String(url);
    let downUrl: String = new String(
      `${BE_SERVER.DOMAIN}/${BE_SERVER.REQUESTS.SINGLE_DOWNLOAD}?url=${userUrl}&audioOnly=${audioOnly}`
    );

    // Navigate to the download link.
    // --> Consider changing the href of the Download Single btn and invoking the click event.
    window.location.href = <string>downUrl;
  }

  downloadPlaylist(url: string, audioOnly: boolean) {
    // console.log('Downloading playlist');
    // console.log(`- Url: ${url}`);
    // console.log(`- Audio Only: ${audioOnly}`);

    let userUrl: String = new String(url);
    let downUrl: String = new String(
      `${BE_SERVER.DOMAIN}/${BE_SERVER.REQUESTS.PLAYLIST_DOWNLOAD}?url=${userUrl}&audioOnly=${audioOnly}`
    );

    window.location.href = <string>downUrl;
  }

  // getVideoId(url) {
  //   return '9x1MZEDQbtA';
  // }
}
