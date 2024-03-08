import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-button',
    template: `
    <div class="wrapper" [ngClass]="inprogress ? 'progress' :'' ">
        <button mat-raised-button [disabled]="inprogress"
        [color]="color" (click)="clickEvent.emit()">{{text}}</button>
        <div class="spinner">
            <mat-spinner></mat-spinner>
        </div>
    </div>
    `,
    styles: `
    div.wrapper {
        position:relative;
        display:inline-block;
        >button {}
        &.progress {
            >div.spinner {
            display:block;
            }
        }
        >div.spinner {
            position:absolute;
            inset:0;
            display:none;
            >mat-spinner {
                height: 1em !important;
            }
        }
    }
    `
})
export class ButtonComponent {
    @Input({ required: true }) public text: string = '';
    @Input({ required: true }) public inprogress: boolean = false;
    @Input() public color: string = '';
    @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();
}