export class UserLog {
    public in: Date;
    public out: Date | undefined;

    constructor({ checkin, checkout }: any) {
        this.in = checkin;
        this.out = checkout;
    }
}