import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { _SERVER } from '../const';

interface IValidate_BE {
  isValid: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ConvertService {
  constructor(private http: HttpClient) {}

  async validateUrl(url: string, isSingle: boolean = true) {
    let reqUrl: string = `${_SERVER.DOMAIN}/${_SERVER.REQUESTS.VALIDATE_URL}?url=${url}&isSingle=${isSingle}`;

    const headers = new HttpHeaders();
    headers.set('content-type', 'application/octet-stream');

    return new Promise<boolean>((isValid) => {
      this.http
        .get(reqUrl, { headers: headers })
        .subscribe((data: IValidate_BE) => {
          isValid(data.isValid);
        });
    });
  }

  downloadSingle(url: string, audioOnly: boolean) {
    let userUrl: string = url;
    let downUrl: string = `${_SERVER.DOMAIN}/${_SERVER.REQUESTS.SINGLE_DOWNLOAD}?url=${userUrl}&audioOnly=${audioOnly}`;

    // let res = this.http
    //   .get(downUrl, { responseType: 'arraybuffer' })
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    // console.log(res);

    // Navigate to the download link.
    // --> Consider changing the href of the Download Single btn and invoking the click event.
    // window.location.href = <string>downUrl;
    window.open(downUrl);
    // return downUrl;
  }

  downloadPlaylist(url: string, audioOnly: boolean) {
    let userUrl: string = url;
    let downUrl: string = `${_SERVER.DOMAIN}/${_SERVER.REQUESTS.PLAYLIST_DOWNLOAD}?url=${userUrl}&audioOnly=${audioOnly}`;

    window.location.href = downUrl;
  }
}
