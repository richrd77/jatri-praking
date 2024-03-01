import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const matModule: any[] = [
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule
];

@NgModule({
    imports: [matModule],
    exports: [matModule]
})
export class JatriMatModue { }