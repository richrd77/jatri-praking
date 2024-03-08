import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `Home works!!
    <button mat-raised-button (click)="Add()" color="primary">Mat</button>
    <p>{{val}}</p>
    <a routerLink="register">Register</a>
    <app-button text="click me" [inprogress]="true"
    color="primary" (clickEvent)="Clicked()"></app-button>
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

    public Clicked(): void {
        console.log('clicked');
    }
}