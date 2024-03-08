import { NgModule } from "@angular/core";
import { JatriMatModue } from "../mat/jatri-mat.module";
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [JatriMatModue, CommonModule],
  exports: [JatriMatModue, TableComponent, HeaderComponent],
  declarations: [
    TableComponent,
    HeaderComponent
  ]
})
export class JatriCommonModue { }