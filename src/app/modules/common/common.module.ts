import { NgModule } from "@angular/core";
import { JatriMatModue } from "../mat/jatri-mat.module";
import {
  TableComponent, HeaderComponent,
  ButtonComponent, AudioComponent, AudioRecorderComponent
} from './components';
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HandleErrorInterceptor } from "./interceptors/handle-error.interceptor";

@NgModule({
  imports: [JatriMatModue, CommonModule, HttpClientModule],
  exports: [JatriMatModue, TableComponent,
    HeaderComponent, ButtonComponent, AudioComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HandleErrorInterceptor, multi: true }],
  declarations: [
    TableComponent,
    HeaderComponent,
    ButtonComponent,
    AudioComponent,
    AudioRecorderComponent
  ]
})
export class JatriCommonModue { }