import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserDetail } from "../models";

@Injectable()
export class DetailsHelper {
    private detailBeh: BehaviorSubject<UserDetail> = new BehaviorSubject<UserDetail>(new UserDetail());

    public get detail$(): Observable<UserDetail> {
        return this.detailBeh.asObservable();
    }

    public LoadDetails(key: string): void {

    }
}