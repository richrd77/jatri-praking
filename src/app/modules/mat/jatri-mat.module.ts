import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const matModule: any[] = [
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatProgressSpinnerModule
];

@NgModule({
    imports: [matModule],
    exports: [matModule]
})
export class JatriMatModue { }