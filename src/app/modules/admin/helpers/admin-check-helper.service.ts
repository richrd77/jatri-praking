import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { PostRequest, PostRequestTypes } from "../../common/models";
import { AdminCheck } from "../models";

@Injectable()
export class AdminCheckHelperService {
    public form: FormGroup;

    public get IsFormValid(): boolean {
        return this.form.valid;
    }

    public get inprogress$(): Observable<boolean> {
        return this.inprogressBehav.asObservable();
    }

    private inprogressBehav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(@Inject('api_url') private url: string,
        private client: HttpClient) {
        console.log('injected ', url);
        this.form = new FormGroup({
            'phone': new FormControl<string>('', [Validators.required, Validators.pattern('\\d{10}')])
        });
    }

    SubmitForm(type: string): void {
        if (!this.IsFormValid) {
            return;
        }

        this.client.post(this.url, this.GetType(type))

    }

    private GetType(t: string): PostRequest<AdminCheck> {
        const ty = t.toLocaleLowerCase().includes('checkin')
            ? PostRequestTypes.ADMIN_CHECKIN
            : PostRequestTypes.ADMIN_CHECKOUT;
        return new PostRequest<AdminCheck>(ty,
            new AdminCheck(this.form.controls['phone'].value));
    }
}