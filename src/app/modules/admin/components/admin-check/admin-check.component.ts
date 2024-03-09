import { Component, Input } from '@angular/core';
import { UserDetail } from '../../../normal/models';

@Component({
  selector: 'app-admin-check',
  templateUrl: './admin-check.component.html',
  styleUrl: './admin-check.component.scss'
})
export class AdminCheckComponent {

  @Input({ required: true }) title: string = '';

  displayedColumns: string[] = ['phone', 'vehicle'];

  public data: UserDetail[] = [
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
    new UserDetail(),
  ];

  public ShowDetail(row: any): void {
    console.log('clicked', row);
  }
}
