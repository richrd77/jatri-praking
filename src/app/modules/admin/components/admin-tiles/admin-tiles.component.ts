import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-tiles',
  templateUrl: './admin-tiles.component.html',
  styleUrl: './admin-tiles.component.scss'
})
export class AdminTilesComponent {
  @Output() public StatClickEvent: EventEmitter<number> = new EventEmitter<number>();
}
