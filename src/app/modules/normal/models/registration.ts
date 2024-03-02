export class Registration {
    mobile: string;
    vehicle: string;
    key: string;
    photo: string;
    checkin: Date;

    constructor({ mobile, vehicle, key }: any) {
        this.mobile = mobile;
        this.vehicle = vehicle;
        this.key = key;
        this.checkin = new Date();
        this.photo = '';
    }
}