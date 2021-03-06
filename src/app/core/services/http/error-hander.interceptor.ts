import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Logger } from '../logger.service';
import { environment } from 'src/environments/environment';

const logger = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next
            .handle(request)
            .pipe(catchError(error => this.errorHandler(error)));
    }

    // Customize the default error handler here if needed
    private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
        if (!environment.production) {
            // Do something with the error
            logger.error('Request error', response);
        }
        throw response;
    }
}
