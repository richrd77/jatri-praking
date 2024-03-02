import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
    name: 'safeimage',
    pure: true,
    standalone: true
})
export class SafeImage implements PipeTransform {

    constructor(private san: DomSanitizer) { }

    transform(value: any, ...args: any[]) {
        console.log('pipe', value);
        // if (value) {
        //     return `data:image/png;base64,${value}`;
        // }
        return value;
    }
}