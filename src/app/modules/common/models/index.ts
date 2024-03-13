import moment from "moment";
import { HeaderMenu } from "./header-menu";
import { PostRequest } from "./post-request";
import { PostRequestTypes } from "./post-request-type";
import { PostResponse } from "./post-response";

export { HeaderMenu, PostRequest, PostRequestTypes, PostResponse }

export interface VehicleCheck {
    key: string;
    timeStamp: moment.Moment;
}