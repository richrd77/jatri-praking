import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AudioService {

    private url: string = '';

    constructor(private client: HttpClient) { }

    public LoadAudio(audio: HTMLAudioElement): void {
        // may be add audio tag for each messages and destroy after that, each audio
        // should start one after the other
        this.client.get(this.url).subscribe((d: any) => {
            audio.src = d.msg;
        });
    }

    public SaveAudio(msg: string): void {
        if (msg) {
            this.client.post(this.url, { timestamp: new Date(), msg: msg })
                .subscribe(s => console.log(s));
        }
    }
}