import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { JatriCommonModue } from "../common/common.module";
import { CommonModule } from "@angular/common";
import {
    RegisterComponent, DetailsComponent,
    QrReaderComponent, CheckoutComponent,
    DetailFacadeComponent, CheckinComponent,
    NormalBaseComponent
} from './components';
import { ReactiveFormsModule } from "@angular/forms";
import { LOAD_WASM, NgxScannerQrcodeModule } from "ngx-scanner-qrcode";
import { SafeImage } from "../common/pipes/safe-image.pipe";

const routes: Routes = [
    {
        path: '', component: NormalBaseComponent, children: [
            { path: 'register', component: RegisterComponent },
            { path: 'checkout', component: CheckoutComponent },
            { path: 'checkin', component: CheckinComponent },
            { path: '', component: HomeComponent, pathMatch: 'full' },
        ]
    },
];

LOAD_WASM().subscribe();

@NgModule({
    declarations: [HomeComponent, RegisterComponent, QrReaderComponent, DetailsComponent, CheckoutComponent, DetailFacadeComponent, CheckinComponent, NormalBaseComponent],
    exports: [RouterModule, DetailsComponent],
    imports: [JatriCommonModue, CommonModule,
        RouterModule.forChild(routes), ReactiveFormsModule,
        NgxScannerQrcodeModule, SafeImage]
})
export class NormalModule { }