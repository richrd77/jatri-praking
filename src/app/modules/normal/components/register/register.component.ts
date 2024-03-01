import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationHelperService } from '../../helpers/registration-helper.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [RegistrationHelperService]
})
export class RegisterComponent {
  @ViewChild('person', { read: TemplateRef }) private personTemplate: TemplateRef<any> | null;
  @ViewChild('qr', { read: TemplateRef }) private qrTemplate: TemplateRef<any> | null;

  constructor(private dialog: MatDialog,
    public helper: RegistrationHelperService) {
    this.personTemplate = null;
    this.qrTemplate = null;
  }

  public ShowPhoto(): void {
    if (this.personTemplate) {
      this.dialog.open<TemplateRef<any>>(this.personTemplate, {
        maxWidth: '90vw',
        maxHeight: '90vh',
        height: '100%',
        width: '100%'
      })
    }
  }

  public ShowQR(): void {
    if (this.qrTemplate) {
      this.dialog.open<TemplateRef<any>>(this.qrTemplate, {
        maxWidth: '90vw',
        maxHeight: '90vh',
        height: '100%',
        width: '100%'
      })
    }
  }
}
