import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxScannerQrcodeComponent, ScannerQRCodeResult } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.component.html',
  styleUrl: './qr-reader.component.scss'
})
export class QrReaderComponent implements OnInit{

  constructor(private ref: MatDialogRef<QrReaderComponent>) { }
  
  // ngOnDestroy(): void {
  //   this.handle(this.action, 'stop');
  // }

  ngOnInit(): void {
    setTimeout(() => {
      this.handle(this.action, 'start');
    }, 10);
  }

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  public handle(action: any, fn: string): void {
    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label))); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    }

    if (fn === 'start') {
      action[fn](playDeviceFacingBack).subscribe((r: any) => console.log(fn, r), alert);
    } else {
      action[fn]().subscribe((r: any) => console.log(fn, r), alert);
    }
  }

  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    this.handle(action, 'stop');
    var res = e.map(d => d.value)[0];
    this.ref.close(res);
  }
}
