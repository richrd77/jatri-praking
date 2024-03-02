import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { DetailFacadeHelperService } from '../../helpers/detail-facade-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-facade',
  templateUrl: './detail-facade.component.html',
  styleUrl: './detail-facade.component.scss',
  providers: [DetailFacadeHelperService]
})
export class DetailFacadeComponent implements OnDestroy {

  private sub: Subscription;

  @Input({ required: true }) public title: string;

  @Output() LoadComplete: EventEmitter<void> = new EventEmitter<void>;

  constructor(public helper: DetailFacadeHelperService) {
    this.title = '';
    this.sub = this.helper.IsLoaded$.subscribe(v => {
      if (v) {
        this.LoadComplete.emit();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
