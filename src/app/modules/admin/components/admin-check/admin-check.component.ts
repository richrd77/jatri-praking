import { Component, Input } from '@angular/core';
import { UserDetail } from '../../../normal/models';
import { AdminCheckHelperService } from '../../helpers/admin-check-helper.service';

@Component({
  selector: 'app-admin-check',
  templateUrl: './admin-check.component.html',
  styleUrl: './admin-check.component.scss',
  providers: [AdminCheckHelperService]
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

  constructor(public helper: AdminCheckHelperService) { }

  public ShowDetail(row: any): void {
    console.log('clicked', row);
  }
}
