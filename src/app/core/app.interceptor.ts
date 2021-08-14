import { Injectable, Provider } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AppInterceptor implements HttpInterceptor{
    intercept( req: HttpRequest <any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req);
        // throw new Error("Method not implemented.");
    }
}
export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};