import { Component } from '@angular/core';
import { HeaderService } from '../../../common/services/header.service';
import { HeaderMenu } from '../../../common/models';

@Component({
  selector: 'app-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrl: './admin-base.component.scss'
})
export class AdminBaseComponent {
  constructor(private menu: HeaderService) {
    this.menu.LoadMenu([
      new HeaderMenu('Home', '/admin'),
      new HeaderMenu('Checkin', '/admin/checkin'),
      new HeaderMenu('Checkout', '/admin/checkout'),
      new HeaderMenu('Statistics', '/admin/stats'),
    ]);
  }
}
