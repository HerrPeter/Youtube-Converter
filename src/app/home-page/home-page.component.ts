import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ConvertService } from '../convert.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IfStmt } from '@angular/compiler';

enum loadingMode {
  none = 'none',
  buffer = 'buffer',
  unsure = 'indeterminate',
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent implements OnInit {
  homeForm: FormGroup;
  audioOnly: boolean;
  url: string = null;
  serverError: boolean = true;
  loading = {
    mode: loadingMode.unsure,
    percentDone: 0,
    inProgress: false,
  };
  btnDisabled = {
    single: true,
    playlist: true,
  };

  constructor(private fb: FormBuilder, private converter: ConvertService) { }

  ngOnInit(): void {
    // Init home page form group
    this.homeForm = this.fb.group({
      url: '',
      passcode: '',
    });
    this.audioOnly = false;

    // Watch for changes to the form (i.e. url changes)
    this.homeForm.valueChanges.subscribe((data) => {
      this.handleUrlChange(data.url);
    });

    // Test if server is up and running
    let serverRes = this.pingServer();
    serverRes.then((isError) => {
      this.serverError = isError;
    });
  }

  async pingServer() {
    return await this.converter.pingServer();
  }

  async downloadSingle() {
    // Begin loading...
    this.loading.inProgress = true;

    let url: string = this.homeForm.value.url;
    let pass: string = this.homeForm.value.passcode;
    let isValid = await this.converter.validateUrl(url, pass);

    if (isValid) {
      this.converter.downloadSingle(url, this.audioOnly, pass);
      this.loading.inProgress = false;
    } else {
      console.log('- Error: Invalid Url or Passcode');
      this.loading.inProgress = false;
    }
  }

  async downloadPlaylist() {
    // Begin loading...
    this.loading.percentDone = 0;
    this.loading.mode = loadingMode.buffer;
    this.loading.inProgress = true;

    let url: string = this.homeForm.value.url;
    let pass: string = this.homeForm.value.passcode;
    let isValid = await this.converter.validateUrl(url, pass, false);

    if (isValid) {
      this.converter.downloadPlaylist(
        url,
        this.audioOnly,
        pass,
        this.handleProgressChange
      );
    } else {
      console.log('- Error: Invalid Url or Passcode');
      this.loading.inProgress = false;
    }
  }

  /**
   * Update the UI progress bar.
   * @param percent The percent currently completed.
   */
  handleProgressChange = (percent: number, done: boolean = false) => {
    if (done) {
      console.log('-- Done loading');
      this.loading.inProgress = false;
      this.loading.mode = loadingMode.buffer;
      return;
    }

    if (percent === NaN) {
      console.log('Error: Percent is NaN');
      return;
    }

    console.log('Updating progress: ' + percent + '%');
    this.loading.percentDone = percent;

    if (percent >= 100) {
      console.log('-- Unsure');
      this.loading.mode = loadingMode.unsure;
    }
  };

  handleUrlChange(url: string): void {
    this.url = url;
    url = url.toLowerCase();
    // console.log(url);
    if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
      // Invalid url
      this.btnDisabled.single = true;
      this.btnDisabled.playlist = true;
      return;
    }

    // Check if url is a playlist or just a single video url.
    if (url.includes('list=', 11) || url.includes('playlist', 11)) {
      this.btnDisabled.playlist = false;
      this.btnDisabled.single = true;
    } else {
      this.btnDisabled.single = false;
      this.btnDisabled.playlist = true;
    }
  }

  handleAudioOnlyToggle(): void {
    this.audioOnly = !this.audioOnly;
  }
}
