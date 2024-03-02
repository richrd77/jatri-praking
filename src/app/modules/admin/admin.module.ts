import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JatriCommonModue } from "../common/common.module";
import { CommonModule } from "@angular/common";
import { AdminHomeComponent } from './components';

const routes: Routes = [
    { path: 'admin', component: AdminHomeComponent }
];


@NgModule({
    declarations: [AdminHomeComponent],
    exports: [RouterModule],
    imports: [JatriCommonModue, CommonModule,
        RouterModule.forChild(routes)]
})
export class AdminModule { }