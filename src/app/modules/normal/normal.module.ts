import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { JatriCommonModue } from "../common/common.module";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from './components';
import { ReactiveFormsModule } from "@angular/forms";
import { LOAD_WASM, NgxScannerQrcodeModule } from "ngx-scanner-qrcode";
import { QrReaderComponent } from './components/qr-reader/qr-reader.component';
import { SafeImage } from "../common/pipes/safe-image.pipe";

const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'qr', component: QrReaderComponent },
    { path: '**', component: HomeComponent },
];

LOAD_WASM().subscribe();

@NgModule({
    declarations: [HomeComponent, RegisterComponent, QrReaderComponent],
    exports: [RouterModule],
    imports: [JatriCommonModue, CommonModule,
        RouterModule.forChild(routes), ReactiveFormsModule,
        NgxScannerQrcodeModule, SafeImage]
})
export class NormalModule { }