import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrl: './checkin.component.scss'
})
export class CheckinComponent {
  
  @ViewChild('btn') private btn: ElementRef<HTMLButtonElement> | undefined;

  HandleBtnEnable(): void {
    if (this.btn) {
      this.btn.nativeElement.disabled = false;
    }
  }
}
