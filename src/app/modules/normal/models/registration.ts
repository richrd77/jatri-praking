import moment from "moment";

export class Registration {
    phone: string;
    vehicle: string;
    key: string;
    photo: string;
    checkin: moment.Moment;

    constructor({ mobile, vehicle, key }: any, photo: string) {
        this.phone = mobile;
        this.vehicle = vehicle;
        this.key = key;
        this.checkin = moment.utc();
        this.photo = photo;
    }
}