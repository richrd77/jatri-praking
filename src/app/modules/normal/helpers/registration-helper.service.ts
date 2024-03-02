import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class RegistrationHelperService {
    public fGroup: FormGroup;

    constructor() {
        this.fGroup = new FormGroup({
            mobile: new FormControl('', [Validators.required, Validators.pattern('\\d{10}')]),
            vehicle: new FormControl('', [Validators.required])
        })
    }

    public Save(): void {
        console.log('submit', this.fGroup.valid, this.fGroup);
    }

    public OnFileSelected(ev: any): void {
        alert('photo uploaded');
        console.log(ev);
    }
}