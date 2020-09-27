import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  downloadSingle() {
    console.log('Downloading single');
  }

  downloadPlaylist() {
    console.log('Downloading playlist');
  }

  getVideoId(url) {
    return '9x1MZEDQbtA';
  }
}
