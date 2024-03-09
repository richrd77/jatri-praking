import { NgModule } from "@angular/core";
import { JatriMatModue } from "../mat/jatri-mat.module";
import {
  TableComponent, HeaderComponent,
  ButtonComponent, AudioComponent, AudioRecorderComponent
} from './components';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [JatriMatModue, CommonModule, HttpClientModule],
  exports: [JatriMatModue, TableComponent,
    HeaderComponent, ButtonComponent, AudioComponent],
  declarations: [
    TableComponent,
    HeaderComponent,
    ButtonComponent,
    AudioComponent,
    AudioRecorderComponent
  ]
})
export class JatriCommonModue { }