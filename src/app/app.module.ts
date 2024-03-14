import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalModule } from './modules/normal/normal.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JatriMatModue } from './modules/mat/jatri-mat.module';
import { AdminModule } from './modules/admin/admin.module';
import { CommonConstants } from './modules/common/constants/common.constants';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JatriMatModue,
    NormalModule,
    AdminModule
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: CommonConstants.API_URL_TOKEN,
      useValue: 'https://script.google.com/macros/s/AKfycbzYoFETTtlEIlWU6t1MVaDlbFtrDSXB-ZQZegogWPjANtTSxicPJkc08iZC7ZlietC1Jw/exec'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
