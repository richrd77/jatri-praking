import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrl: './admin-stats.component.scss'
})
export class AdminStatsComponent {
  @Output() public StatClickEvent: EventEmitter<number> = new EventEmitter<number>();
}
