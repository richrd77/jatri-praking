import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JatriCommonModue } from "../common/common.module";
import { CommonModule } from "@angular/common";
import { NormalModule } from "../normal/normal.module";
import {
    AdminBaseComponent, AdminHomeComponent,
    AdmiCheckoutComponent, AdmiCheckinComponent,
    AdminCheckComponent, AdminStatsComponent,
    AdminTilesComponent
} from './components';
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
    {
        path: 'admin', component: AdminBaseComponent, children: [
            { path: '', component: AdminHomeComponent },
            { path: 'checkin', component: AdmiCheckinComponent },
            { path: 'checkout', component: AdmiCheckoutComponent },
            { path: 'stats', component: AdminStatsComponent },
        ]
    }
];


@NgModule({
    declarations: [AdminHomeComponent, AdminBaseComponent,
        AdmiCheckinComponent, AdmiCheckoutComponent,
        AdminCheckComponent, AdminStatsComponent, AdminTilesComponent],
    exports: [RouterModule],
    imports: [JatriCommonModue, CommonModule,
        NormalModule, HttpClientModule,
        RouterModule.forChild(routes)]
})
export class AdminModule { }