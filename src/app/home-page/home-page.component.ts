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
  btnDisabled = {
    single: true,
    playlist: true,
  };

  constructor(private fb: FormBuilder, private converter: ConvertService) {}

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
      console.log(isError);
    });
  }

  async pingServer() {
    return await this.converter.pingServer();
  }

  async downloadSingle() {
    let url: string = this.homeForm.value.url;
    let pass: string = this.homeForm.value.passcode;
    let isValid = await this.converter.validateUrl(url, pass);

    if (isValid) {
      this.converter.downloadSingle(url, this.audioOnly, pass);
      // this.homeForm.setValue({url: downUrl})
      // this.url = downUrl;
    } else {
      console.log('- Error: Invalid Url or Passcode');
    }
  }

  async downloadPlaylist() {
    let url: string = this.homeForm.value.url;
    let pass: string = this.homeForm.value.passcode;
    let isValid = await this.converter.validateUrl(url, pass, false);

    if (isValid) {
      this.converter.downloadPlaylist(url, this.audioOnly, pass);
    } else {
      console.log('- Error: Invalid Url or Passcode');
    }
  }

  handleUrlChange(url: string): void {
    this.url = url;
    url = url.toLowerCase();
    // console.log(url);
    if (!url.includes('youtube.com')) {
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
