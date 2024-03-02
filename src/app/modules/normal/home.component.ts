import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `Home works!!
    <button mat-raised-button (click)="Add()" color="primary">Mat</button>
    <p>{{val}}</p>
    <a routerLink="register">Register</a>
    <ngx-scanner-qrcode #action="scanner"></ngx-scanner-qrcode>
    <span>{{ action.data.value | json }}</span>
    <span>{{ action.data | async | json }}</span>
    <button (click)="action.isStart ? action.stop() : action.start()">{{action.isStart ? 'Stop' : 'Start'}}</button>
    `
})
export class HomeComponent {
    Add(): void {
        this.updateVal = this.val + 1;
    }

    public get val(): number {
        const rawValue = sessionStorage.getItem('val');
        return rawValue ? Number(rawValue) : 0;
    }

    private set updateVal(v: number) {
        const newVal = this.val + v;
        sessionStorage.setItem('val', JSON.stringify(newVal));
    }
}