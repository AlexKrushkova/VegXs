import { Injectable, Provider } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import  { environment } from "../../environments/environment";
const apiURL = environment.apiURL;

@Injectable()
export class AppInterceptor implements HttpInterceptor{
    
    intercept( req: HttpRequest <any>, next: HttpHandler): Observable<HttpEvent<any>>{
        // throw new Error("Method not implemented.");
       if(!req.url.includes('http')){
           req = req.clone({
               url: `${apiURL}${req.url}`
           })
       }
       
        return next.handle(req);
    }
}
export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};