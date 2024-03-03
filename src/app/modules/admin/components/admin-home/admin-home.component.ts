import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminHomeHelperService } from '../helpers/admin-home-helper.service';
import { UserDetail } from '../../../normal/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss',
  providers: [AdminHomeHelperService]
})
export class AdminHomeComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild('pag') private paginator: MatPaginator | null;

  public dataSource: MatTableDataSource<UserDetail> = new MatTableDataSource<UserDetail>([]);

  displayedColumns: string[] = ['phone', 'vehicle'];

  private subscription: Subscription;

  constructor(public helper: AdminHomeHelperService) {
    this.paginator = null;
    this.subscription = this.helper.data$.subscribe(d => this.dataSource.data = d);
  }
  ngOnInit(): void {
    this.helper.Fetch();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    console.log('pa', this.paginator);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    console.log('filter', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
