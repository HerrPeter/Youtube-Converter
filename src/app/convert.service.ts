import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { SseService } from './sse.service';

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
  private serverError = true;

  constructor(private http: HttpClient, private sseService: SseService) {}

  async pingServer(): Promise<boolean> {
    let pingError = true;

    let reqUrl = `${_SERVER.SSL_DOMAIN}/${_SERVER.REQUESTS.TEST}`;
    const headers = new HttpHeaders();
    headers.set('content-type', 'application/json');

    pingError = await new Promise<boolean>((isError) => {
      this.http
        .get(reqUrl, { headers: headers, observe: 'response' })
        .subscribe(
          (res) => {
            if (res.status === 200) {
              isError(false);
            }
          },
          (err) => {
            console.log('Server NOT Reached (please reach out to the Admin)');
            isError(true);
          }
        );
    });

    this.serverError = pingError;
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
    if (this.serverError) {
      console.log('Server Error =/');
      return;
    }

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
    if (this.serverError) {
      console.log('Server Error =/');
      return;
    }

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

  /**
   * Initiate download of youtube playlist from a url.
   * @param url
   * @param audioOnly
   * @param passcode
   */
  downloadPlaylist(
    url: string,
    limitVideos: number,
    audioOnly: boolean,
    passcode: string,
    updateUiProgressBar: Function
  ) {
    if (this.serverError) {
      console.log('Server Error =/');
      return;
    }

    let query = this.encodeQuery(
      ['url', 'audioOnly', 'pass', 'limitVideos'],
      [url, audioOnly, passcode, limitVideos]
    );
    let downUrl = `${_SERVER.SSL_DOMAIN}/${_SERVER.REQUESTS.PLAYLIST_DOWNLOAD}?${query}`;

    this.sseService.getServerSentEvent(downUrl).subscribe(
      (event) => {
        let data = String(event.data);

        // Check if data is zip file name.
        if (data.includes('.zip')) {
          // Request zip file from server.
          // window.location.href = downUrl;
          updateUiProgressBar(0, true);

          // Make another get request for the playlist zip file.
          let playlistFile = data;
          let query = this.encodeQuery(['file'], [playlistFile]);
          let downUrl = `${_SERVER.SSL_DOMAIN}/${_SERVER.REQUESTS.PLAYLIST_FILE}?${query}`;
          window.location.href = downUrl;
          // window.open(downUrl);
          // this.http.get(downUrl)
          return;
        }

        // Check if data is a number.
        if (Number(data) !== NaN) {
          // Update progress bar.
          updateUiProgressBar(Number(data));
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  _downloadPlaylist(url: string, audioOnly: boolean, passcode: string) {
    if (this.serverError) {
      console.log('Server Error =/');
      return;
    }

    let query: string = this.encodeQuery(
      ['url', 'audioOnly', 'pass'],
      [url, audioOnly, passcode]
    );
    let downUrl: string = `${_SERVER.SSL_DOMAIN}/${_SERVER.REQUESTS.PLAYLIST_DOWNLOAD}?${query}`;

    window.location.href = downUrl;
  }
}
