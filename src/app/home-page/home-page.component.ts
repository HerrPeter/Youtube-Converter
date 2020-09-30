import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ConvertService } from '../convert.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent implements OnInit {
  homeForm: FormGroup;
  audioOnly: boolean;
  url: string = null;

  constructor(private fb: FormBuilder, private converter: ConvertService) {}

  ngOnInit(): void {
    this.homeForm = this.fb.group({
      url: '',
    });
    this.audioOnly = false;
  }

  async downloadSingle() {
    let isValid = await this.converter.validateUrl(this.homeForm.value.url);

    if (isValid) {
      this.converter.downloadSingle(this.homeForm.value.url, this.audioOnly);
    } else {
      console.log('- Error: Invalid Url');
    }
  }

  async downloadPlaylist() {
    let isValid = await this.converter.validateUrl(
      this.homeForm.value.url,
      false
    );

    if (isValid) {
      this.converter.downloadPlaylist(this.homeForm.value.url, this.audioOnly);
    } else {
      console.log('- Error: Invalid Url');
    }
  }

  handleUrlChange(url: string): void {
    this.url = url;
  }

  handleAudioOnlyToggle(): void {
    this.audioOnly = !this.audioOnly;
  }
}
