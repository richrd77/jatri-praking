import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DetailsHelper } from '../../helpers/details-helper.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  providers: [DetailsHelper]
})
export class DetailsComponent implements OnInit {

  @Input({ required: true }) public key: string;

  @ViewChild('person', { read: TemplateRef }) private personTemplate: TemplateRef<any> | null;
  @ViewChild('qr', { read: TemplateRef }) private qrTemplate: TemplateRef<any> | null;

  constructor(private dialog: MatDialog,
    public helper: DetailsHelper) {
    this.personTemplate = null;
    this.qrTemplate = null;
    this.key = '';
  }

  ngOnInit(): void {
    if(this.key) {
      this.helper.LoadDetails(this.key);
    }
  }

  public ShowPhoto(): void {
    if (this.personTemplate) {
      this.dialog.open<TemplateRef<any>>(this.personTemplate)
    }
  }

  public ShowQR(): void {
    if (this.qrTemplate) {
      this.dialog.open<TemplateRef<any>>(this.qrTemplate);
    }
  }
}
