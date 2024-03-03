import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JatriCommonModue } from "../common/common.module";
import { CommonModule } from "@angular/common";
import { AdminHomeComponent } from './components';
import { NormalModule } from "../normal/normal.module";

const routes: Routes = [
    { path: 'admin', component: AdminHomeComponent }
];


@NgModule({
    declarations: [AdminHomeComponent],
    exports: [RouterModule],
    imports: [JatriCommonModue, CommonModule,
        NormalModule,
        RouterModule.forChild(routes)]
})
export class AdminModule { }