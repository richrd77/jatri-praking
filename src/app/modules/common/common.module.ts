import { NgModule } from "@angular/core";
import { JatriMatModue } from "../mat/jatri-mat.module";
import { TableComponent, HeaderComponent, ButtonComponent } from './components';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [JatriMatModue, CommonModule],
  exports: [JatriMatModue, TableComponent, HeaderComponent, ButtonComponent],
  declarations: [
    TableComponent,
    HeaderComponent,
    ButtonComponent
  ]
})
export class JatriCommonModue { }