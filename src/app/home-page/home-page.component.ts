import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../convert.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent implements OnInit {
  constructor(private _converter: ConvertService) {}

  ngOnInit(): void {
    // this._converter.toMp3();
    console.log('Done');
    // .subscribe((data) => {
    //   console.log(data);
    // });
  }

  downloadSingle(): void {
    this._converter.downloadSingle();
  }

  downloadPlaylist(): void {
    this._converter.downloadPlaylist();
  }
}
