import { NgModule } from "@angular/core";
import { JatriMatModue } from "../mat/jatri-mat.module";
import { TableComponent } from './components/table/table.component';

@NgModule({
    imports: [JatriMatModue],
    exports: [JatriMatModue, TableComponent],
    declarations: [
      TableComponent
    ]
})
export class JatriCommonModue { }