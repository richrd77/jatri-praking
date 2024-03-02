import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { JatriCommonModue } from "../common/common.module";
import { CommonModule } from "@angular/common";
import {
    RegisterComponent, DetailsComponent,
    QrReaderComponent, CheckoutComponent,
    DetailFacadeComponent, CheckinComponent
} from './components';
import { ReactiveFormsModule } from "@angular/forms";
import { LOAD_WASM, NgxScannerQrcodeModule } from "ngx-scanner-qrcode";
import { SafeImage } from "../common/pipes/safe-image.pipe";

const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'checkin', component: CheckinComponent },
    { path: '**', component: HomeComponent },
];

LOAD_WASM().subscribe();

@NgModule({
    declarations: [HomeComponent, RegisterComponent, QrReaderComponent, DetailsComponent, CheckoutComponent, DetailFacadeComponent, CheckinComponent],
    exports: [RouterModule],
    imports: [JatriCommonModue, CommonModule,
        RouterModule.forChild(routes), ReactiveFormsModule,
        NgxScannerQrcodeModule, SafeImage]
})
export class NormalModule { }