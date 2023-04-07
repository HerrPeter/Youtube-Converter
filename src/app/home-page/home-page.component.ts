import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ConvertService } from '../convert.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  schedulePicForm: FormGroup;
  homeForm: FormGroup;
  audioOnly: boolean;
  url: string = null;
  serverError: boolean = false;
  scheduleImageFile: File;

  loading = {
    mode: loadingMode.unsure,
    percentDone: 0,
    inProgress: true,
  };
  btnDisabled = {
    single: true,
    playlist: true,
  };

  constructor(private fb: FormBuilder, private converter: ConvertService) {}

  ngOnInit(): void {
    // Init schedule to pic form group
    this.schedulePicForm = new FormGroup({
      scheduleImage: new FormControl(''),
    });

    // Init home page form group
    this.homeForm = this.fb.group({
      url: '',
      passcode: '',
      limitVideos: 10,
    });

    // this.homeForm.get('url').disable();
    this.homeForm.disable();
    this.audioOnly = false;

    // Watch for changes to the form (i.e. url changes)
    this.homeForm.valueChanges.subscribe((data) => {
      this.handleUrlChange(data.url);
    });

    // Test if server is up and running
    let serverRes = this.pingServerError();
    serverRes.then((isError) => {
      this.serverError = isError;
      this.loading.inProgress = false;
      if (!isError) this.homeForm.enable();
    });
  }

  async pingServerError() {
    return await this.converter.pingServer();
  }

  async downloadSingle() {
    // Begin loading...
    this.loading.mode = loadingMode.unsure;
    this.loading.inProgress = true;
    this.homeForm.disable();
    this.btnDisabled.single = true;

    // Ping server to test...
    let isError = await this.pingServerError();
    if (isError) {
      this.serverError = isError;
      this.loading.inProgress = false;
      this.btnDisabled.single = false;
      this.homeForm.enable();

      console.log(isError);
      return;
    }

    // Begin downloading single video...
    let url: string = this.homeForm.value.url;
    let pass: string = this.homeForm.value.passcode;
    let isValid = await this.converter.validateUrl(url, pass);

    if (isValid) {
      this.converter.downloadSingle(url, this.audioOnly, pass);
    } else {
      console.log('- Error: Invalid Url or Passcode');
    }

    this.loading.inProgress = false;
    this.btnDisabled.single = false;
    this.homeForm.enable();
  }

  async downloadPlaylist() {
    // Begin loading...
    this.loading.percentDone = 0;
    this.loading.mode = loadingMode.buffer;
    this.loading.inProgress = true;
    this.btnDisabled.playlist = true;

    // Ping server to test...
    let isError = await this.pingServerError();
    if (isError) {
      this.serverError = isError;
      this.loading.inProgress = false;
      this.btnDisabled.playlist = false;
      this.homeForm.enable();

      console.log(isError);
      return;
    }

    // Begin downloading playlist...
    let url: string = this.homeForm.value.url;
    let pass: string = this.homeForm.value.passcode;
    let limitVideos: number = Number(this.homeForm.value.limitVideos);
    let isValid = await this.converter.validateUrl(url, pass, false);

    if (isValid) {
      this.converter.downloadPlaylist(
        url,
        limitVideos,
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
      this.btnDisabled.playlist = false;
      this.homeForm.enable();
      return;
    }

    // ERROR: percent is ALWAYS a number given the param type.
    // if (percent === NaN) {
    //   console.log('Error: Percent is NaN');
    //   return;
    // }

    console.log('Updating progress: ' + percent + '%');
    this.loading.percentDone = percent;

    if (percent >= 100) {
      this.loading.mode = loadingMode.unsure;
      console.log('-- Unsure');
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

  handleConvertToCalendar = () => {
    if (!this.scheduleImageFile) {
      console.log('Missing an image file');
      return;
    }

    console.log('Starting Convert to Calendar Process...');
    // console.log(this.schedulePicForm.value);
    console.log('-- Sending File: ');
    console.log(this.scheduleImageFile);
    this.converter.sendImage(this.scheduleImageFile);
  };

  handleFileSelected = (event: any) => {
    this.scheduleImageFile = event.target.files[0];
    // console.log('Selected File: ', this.scheduleImageFile);
  };
}
