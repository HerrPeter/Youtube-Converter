import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
// import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//#region  -- My Stuff -- //
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//#endregion

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatListModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
