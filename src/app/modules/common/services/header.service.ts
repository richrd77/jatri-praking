import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HeaderMenu } from "../models/header-menu";

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    private behavour: BehaviorSubject<HeaderMenu[]> = new BehaviorSubject<HeaderMenu[]>([]);

    public get Menu$(): Observable<HeaderMenu[]> {
        return this.behavour.asObservable();
    }

    public LoadMenu(menu: HeaderMenu[]): void {
        this.behavour.next(menu);
    }
}