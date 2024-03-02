import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  @ViewChild('btn') private btn: ElementRef<HTMLButtonElement> | undefined;

  HandleBtnEnable(): void {
    if (this.btn) {
      this.btn.nativeElement.disabled = false;
    }
  }
}
