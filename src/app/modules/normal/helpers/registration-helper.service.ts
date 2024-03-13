import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { BehaviorSubject, Observable, defer } from "rxjs";
import { QrReaderComponent } from "../components";
import { Registration } from "../models";
import { PostRequest, PostRequestTypes } from "../../common/models";
import { NormalService } from "../services/normal.service";

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

    constructor(private dialog: MatDialog,
        private service: NormalService) {
        this.fGroup = new FormGroup({});
        this.Init();
    }

    private Init(): void {
        this.fGroup = new FormGroup({
            mobile: new FormControl('', [Validators.required, Validators.pattern('\\d{10}')]),
            vehicle: new FormControl('', [Validators.required]),
            key: new FormControl<string | undefined>(undefined)
        });
        this.photoBehavour.next('');
        this.qrPhotoBehavour.next('');
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

    public ShowScan(): void {
        const ref = this.dialog.open(QrReaderComponent);

        ref.afterClosed()
            .subscribe(k => this.fGroup.patchValue({ key: k }));
    }

    public Save(): void {
        alert(JSON.stringify(this.fGroup.getRawValue()));
        console.log('submit', this.fGroup.valid, this.fGroup.getRawValue());
        const dataTobePosted = new PostRequest<Registration>
            (PostRequestTypes.NORMAL_REGISTRATION,
                new Registration(this.fGroup.getRawValue(), this.photoBehavour.value));

        this.service.PostData<Registration, string>(dataTobePosted)
            .subscribe(d => {
                console.log('registration', d);
                //this.Init();
            });
    }
}