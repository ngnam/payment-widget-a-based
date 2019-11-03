import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../../environments/environment.service';

/**
 * Prefixes all requests not starting with `http[s]` with `environment.BASE_API`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
    constructor(private environment: EnvironmentService) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (!/^(http|https):/i.test(request.url)) {
            request = request.clone({
                url: this.environment.BASE_API_URL + request.url
            });
        }
        return next.handle(request);
    }
}
