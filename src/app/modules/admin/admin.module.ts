import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JatriCommonModue } from "../common/common.module";
import { CommonModule } from "@angular/common";
import { NormalModule } from "../normal/normal.module";
import {
    AdminBaseComponent, AdminHomeComponent,
    AdmiCheckoutComponent, AdmiCheckinComponent
} from './components';

const routes: Routes = [
    {
        path: 'admin', component: AdminBaseComponent, children: [
            { path: '', component: AdminHomeComponent },
            { path: 'checkin', component: AdmiCheckinComponent },
            { path: 'checkout', component: AdmiCheckoutComponent },
        ]
    }
];


@NgModule({
    declarations: [AdminHomeComponent, AdminBaseComponent, AdmiCheckinComponent, AdmiCheckoutComponent],
    exports: [RouterModule],
    imports: [JatriCommonModue, CommonModule,
        NormalModule,
        RouterModule.forChild(routes)]
})
export class AdminModule { }