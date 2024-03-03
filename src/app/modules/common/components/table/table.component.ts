import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnChanges, AfterViewInit {

  @Input({ required: true }) cols: string[] = [];
  @Input({ required: true }) data: any[] = [];

  @Output() rowClickEvent: EventEmitter<any> = new EventEmitter<any>;

  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  @ViewChild('pag') private paginator: MatPaginator | null;

  constructor() {
    this.paginator = null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = this.data;
  }

  ngAfterViewInit(): void {
    console.log('pa', this.paginator);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    console.log('filter', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public ShowDetail(row: any): void {
    this.rowClickEvent.emit(row);
  }
}
