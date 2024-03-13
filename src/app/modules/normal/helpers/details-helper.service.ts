import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserDetail } from "../models";
import { NormalService } from "../services/normal.service";
import { PostRequest, PostRequestTypes, PostResponse } from "../../common/models";
import { ObserverConstants } from "../../common/constants/observer.constants";

@Injectable()
export class DetailsHelper {
    private detailBeh: BehaviorSubject<UserDetail> = new BehaviorSubject<UserDetail>(new UserDetail());

    public get detail$(): Observable<UserDetail> {
        return this.detailBeh.asObservable();
    }

    constructor(private service: NormalService) { }

    public LoadDetails(key: string, isKey: boolean): void {
        //TODO: check how to see if this is checkin or checkout
        const data: PostRequest<string> = new PostRequest<string>(this.GetType(isKey), key);
        this.service.PostData<string, UserDetail>(data)
            .subscribe(ObserverConstants.Observer<UserDetail>(d => console.log(d)));
    }

    private GetType(isKeyMode: boolean): number {
        return isKeyMode ? PostRequestTypes.ADMIN_KEY_SEARCH : PostRequestTypes.NORMAL_KEY_SEARCH;
    }
}