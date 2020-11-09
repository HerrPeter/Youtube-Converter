import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { _SERVER } from '../const';

/**
 * Backend validation interface.
 */
interface IValidate_BE {
  isValid: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ConvertService {
  constructor(private http: HttpClient) {}

  async pingServer(): Promise<boolean> {
    let pingError = true;

    let reqUrl = `${_SERVER.SSL_DOMAIN}/${_SERVER.REQUESTS.TEST}`;
    const headers = new HttpHeaders();
    headers.set('content-type', 'application/json');

    //new Promise<boolean>((isSuccessful) => {
    pingError = await new Promise<boolean>((isError) => {
      this.http
        .get(reqUrl, { headers: headers, observe: 'response' })
        .subscribe(
          (res) => {
            if (res.status === 200) {
              console.log('Server Reached');
              isError(false);
            }
          },
          (err) => {
            console.log('Server NOT Reached');
            isError(true);
          }
        );
    });
    // })

    return pingError;
  }

  encodeQuery(keys: string[], values: any[]) {
    if (keys.length !== values.length || keys.length === 0) {
      return '';
    }

    let query: string = '';
    keys.forEach((key, keyIndex, keys) => {
      query = query + `${key}=${encodeURIComponent(values[keyIndex])}`;
      if (keyIndex < keys.length) {
        query = query + '&';
      }
    });

    return query;
  }

  async validateUrl(url: string, passcode: string, isSingle: boolean = true) {
    let query: string = this.encodeQuery(
      ['url', 'isSingle', 'pass'],
      [url, isSingle, passcode]
    );
    let reqUrl: string = `${_SERVER.SSL_DOMAIN}/${_SERVER.REQUESTS.VALIDATE_URL}?${query}`;

    // console.log(query);

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

  downloadSingle(url: string, audioOnly: boolean, passcode: string) {
    let userUrl: string = url;
    let query: string = this.encodeQuery(
      ['url', 'audioOnly', 'pass'],
      [url, audioOnly, passcode]
    );
    let downUrl: string = `${_SERVER.SSL_DOMAIN}/${_SERVER.REQUESTS.SINGLE_DOWNLOAD}?${query}`;

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

  downloadPlaylist(url: string, audioOnly: boolean, passcode: string) {
    let query: string = this.encodeQuery(
      ['url', 'audioOnly', 'pass'],
      [url, audioOnly, passcode]
    );
    let downUrl: string = `${_SERVER.SSL_DOMAIN}/${_SERVER.REQUESTS.PLAYLIST_DOWNLOAD}?${query}`;

    window.location.href = downUrl;
  }
}
