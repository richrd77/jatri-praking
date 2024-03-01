import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalModule } from './modules/normal/normal.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { APP_BASE_HREF } from '@angular/common';
import { JatriMatModue } from './modules/mat/jatri-mat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JatriMatModue,
    NormalModule,
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
