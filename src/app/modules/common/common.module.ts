import { NgModule } from "@angular/core";
import { JatriMatModue } from "../mat/jatri-mat.module";
import {
  TableComponent, HeaderComponent,
  ButtonComponent, AudioComponent, AudioRecorderComponent
} from './components';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [JatriMatModue, CommonModule],
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