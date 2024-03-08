import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminHomeHelperService } from '../../helpers/admin-home-helper.service';
import { UserDetail } from '../../../normal/models';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss',
  providers: [AdminHomeHelperService]
})
export class AdminHomeComponent implements OnInit {

  @ViewChild('det') private detailsTemplate: TemplateRef<any> | null;
  @ViewChild('stat') private statsTemplate: TemplateRef<any> | null;

  displayedColumns: string[] = ['phone', 'vehicle'];

  constructor(public helper: AdminHomeHelperService,
    private dialog: MatDialog) {
    this.detailsTemplate = null;
    this.statsTemplate = null;
  }
  ngOnInit(): void {
    this.helper.Fetch();
  }

  public ShowDetail(row: any): void {
    console.log('clicked', row);
    if (this.detailsTemplate) {
      this.dialog.open(this.detailsTemplate, { data: row });
    }
  }

  public ShowStat(): void {
    if (this.statsTemplate) {
      this.dialog.open(this.statsTemplate);
    }
  }
}
