import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { EMPTY, Observable, catchError } from "rxjs";

export class HandleErrorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(catchError((err: any, ob: any) => {
                console.log('interceptor', err, ob);
                alert('error occured man!!!');
                return EMPTY;
            }))
    }
}