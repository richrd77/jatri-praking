import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { PostRequest, PostResponse, VehicleCheck } from "../../common/models";
import { Registration } from "../models";
import { CommonConstants } from "../../common/constants/common.constants";

@Injectable()
export class NormalService {
    constructor(@Inject(CommonConstants.API_URL_TOKEN) private url: string,
        private client: HttpClient) { }

    public PostData<T, U>(data: PostRequest<T>): Observable<PostResponse<U>> {
        return this.client.post(this.url, data)
            .pipe(map((res: any) => new PostResponse<U>(res)));
    }

    // public Register(data: PostRequest<Registration>): Observable<PostResponse<string>> {
    //     return this.client.post(this.url, data)
    //         .pipe(map((res: any) => new PostResponse<string>(res)));
    // }

    // public Checkin(data: PostRequest<VehicleCheck>): Observable<PostResponse<string>> {
    //     return this.client.post(this.url, data)
    //         .pipe(map((res: any) => new PostResponse<string>(res)))
    // }
}