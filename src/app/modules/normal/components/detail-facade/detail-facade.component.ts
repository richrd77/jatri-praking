import { Component } from '@angular/core';
import { DetailFacadeHelperService } from '../../helpers/detail-facade-helper.service';

@Component({
  selector: 'app-detail-facade',
  templateUrl: './detail-facade.component.html',
  styleUrl: './detail-facade.component.scss',
  providers: [DetailFacadeHelperService]
})
export class DetailFacadeComponent {

  constructor(public helper: DetailFacadeHelperService) { }
  
}
