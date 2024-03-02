import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject, Observable, defer } from "rxjs";

@Injectable()
export class RegistrationHelperService {
    private photoBehavour: BehaviorSubject<string> = new BehaviorSubject<string>('');
    private qrPhotoBehavour: BehaviorSubject<string> = new BehaviorSubject<string>('');

    public get Photo$(): Observable<string> {
        return this.photoBehavour.asObservable();
    }

    public get QR$(): Observable<string> {
        return this.qrPhotoBehavour.asObservable();
    }

    public fGroup: FormGroup;

    constructor() {
        this.fGroup = new FormGroup({
            mobile: new FormControl('', [Validators.required, Validators.pattern('\\d{10}')]),
            vehicle: new FormControl('', [Validators.required])
        })
    }

    public OnFileSelected(ev: any): void {
        var file = ev.target.files ? ev.target.files[0] : undefined;
        defer(() => this.ReadImage(file))
            .subscribe(i => {
                this.photoBehavour.next(i);
            });
        console.log(ev);
    }

    private ReadImage(file: any): Promise<any> {
        return new Promise((resolve, error) => {
            if (file) {
                var reader = new FileReader();
                reader.onloadend = function () {
                    console.log('RESULT', reader.result);
                    resolve(reader.result)
                };
                reader.readAsDataURL(file);
            }
        })
    }

    public Save(): void {
        console.log('submit', this.fGroup.valid, this.fGroup);
    }
}