import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public helper: HeaderService,
    public router: Router) { }
}
