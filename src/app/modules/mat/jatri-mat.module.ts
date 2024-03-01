import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const matModule: any[] = [
    MatButtonModule,
    MatToolbarModule
];

@NgModule({
    imports: [matModule],
    exports: [matModule]
})
export class JatriMatModue { }