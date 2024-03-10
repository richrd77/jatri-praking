export class PostResponse<Ty> {
    public success: boolean;
    public message: string;
    public data: Ty;

    constructor({ success, message, data }: any) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
}