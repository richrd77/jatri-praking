import { Component, Input } from '@angular/core';
import { DetailFacadeHelperService } from '../../helpers/detail-facade-helper.service';

@Component({
  selector: 'app-detail-facade',
  templateUrl: './detail-facade.component.html',
  styleUrl: './detail-facade.component.scss',
  providers: [DetailFacadeHelperService]
})
export class DetailFacadeComponent {

  @Input({ required: true }) public title: string;

  constructor(public helper: DetailFacadeHelperService) {
    this.title = '';
  }

}
