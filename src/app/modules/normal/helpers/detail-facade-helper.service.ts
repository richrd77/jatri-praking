import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { QrReaderComponent } from "../components";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class DetailFacadeHelperService {

    private keySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

    public get ScannedKey$(): Observable<string>{
        return this.keySubject.asObservable();
    }

    constructor(private dialog: MatDialog) { }

    public ScanQrCode(): void {
        const ref = this.dialog.open(QrReaderComponent);

        ref.afterClosed()
            .subscribe(k => this.keySubject.next(k));
    }
}