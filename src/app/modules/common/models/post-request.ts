export class PostRequest<T> {
    public type: number;
    public data: T;
    constructor(type: number, dat: T) {
        this.type = type;
        this.data = dat;
    }
}