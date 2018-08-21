import { Injectable } from "../../../node_modules/@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs/Observable";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let access_token = localStorage.getItem('token');
        if(access_token){
            const request = req.clone({
                headers : req.headers.set("Authorization", "Bearer " + access_token)
            });

            return next.handle(request);
        }

        return next.handle(req);
    }

}