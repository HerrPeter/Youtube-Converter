import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../convert.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent implements OnInit {
  constructor(private _http: ConvertService) {}

  ngOnInit(): void {
    this._http
      .toMp3(
        'https://www.youtube.com/watch?v=9x1MZEDQbtA&list=PLmPDdtpUSi9Pp5Fx842q1FOaZjiV5WQGq&index=32&t=0s&ab_channel=BeatlesArchivesHQ'
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
