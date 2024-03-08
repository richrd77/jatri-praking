import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserDetail } from "../../normal/models";

@Injectable()
export class AdminHomeHelperService {
    private data: UserDetail[] = [
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
        new UserDetail(),
    ];
    private subject: BehaviorSubject<UserDetail[]> = new BehaviorSubject<UserDetail[]>([]);

    public get data$(): Observable<UserDetail[]> {
        return this.subject.asObservable();
    }

    public Fetch(): void {
        this.subject.next(this.data);
    }

    // public ShowDetail(row: any): void {
    //     console.log('clicked', row);
    // }
}