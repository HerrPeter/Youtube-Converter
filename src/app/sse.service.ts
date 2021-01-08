import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SseService {
  constructor(private _zone: NgZone) {}

  getServerSentEvent(url: string): Observable<any> {
    return Observable.create((observer) => {
      const eventSource = this.getEventSource(url);
      eventSource.onopen = (ev) => {
        console.log('-- Open Connection --');
      };

      eventSource.addEventListener('complete', () => {
        console.log('-- Closing --');
        eventSource.close();
      });
      // On message from server.
      eventSource.onmessage = (event) => {
        this._zone.run(() => {
          observer.next(event);
        });
      };
      // On error.
      eventSource.onerror = (error) => {
        this._zone.run(() => {
          console.log(`SSE Error:`);
          console.log(error);
          observer.error(error);
        });
      };
    });
  }

  private getEventSource(url: string): EventSource {
    return new EventSource(url);
  }
}
