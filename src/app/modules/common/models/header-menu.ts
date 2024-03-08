export class HeaderMenu {
    public Text: string;
    public Route: string;
    constructor(text: string, url: string) {
        this.Text = text;
        this.Route = url;
    }
}