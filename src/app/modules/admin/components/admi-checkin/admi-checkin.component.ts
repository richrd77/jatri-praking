import { Component } from '@angular/core';
import { UserDetail } from '../../../normal/models';

@Component({
  selector: 'app-admi-checkin',
  templateUrl: './admi-checkin.component.html',
  styleUrl: './admi-checkin.component.scss'
})
export class AdmiCheckinComponent {
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
