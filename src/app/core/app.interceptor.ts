import { Injectable, Provider } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import  { environment } from "../../environments/environment";
const apiURL = environment.apiURL;
import { map, filter, catchError } from "rxjs/operators";

@Injectable()
export class AppInterceptor implements HttpInterceptor{
    
    intercept( req: HttpRequest <any>, next: HttpHandler): Observable<HttpEvent<any>>{
        // throw new Error("Method not implemented.");
       if(!req.url.includes('http')){
           req = req.clone({
               url: `${apiURL}${req.url}`
           });
       }
          
        return next.handle(req).pipe(
            map(e => {
                if (e instanceof HttpResponse && e.url.includes('login')){
                    const authToken = e.headers.get('Authentication');
                }
                return e;
            }),
            catchError(err=>{
                console.log(err);
                return of(err);
            })
        );
    }
}
export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};