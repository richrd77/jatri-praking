import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { JatriCommonModue } from "../common/common.module";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from './components';

const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: '**', component: HomeComponent },
];

@NgModule({
    declarations: [HomeComponent, RegisterComponent],
    imports: [JatriCommonModue, CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NormalModule { }