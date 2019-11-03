import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';

/**
 * Append Header all requests with `withCredentials: true`,
 */
@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (this.authenticationService.credentials) {
            request = request.clone({
                setHeaders: {
                    'Access-Control-Allow-Origin': '*',
                    Authorization: `Bearer ${this.authenticationService.credentials.token}`
                }
            });
        }

        return next.handle(request);
    }
}
