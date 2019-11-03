import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, delay, startWith, tap } from 'rxjs/operators';
import { LoadingService } from '../loading.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public loaderService: LoadingService) {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(() => this.loaderService.show()),
            delay(1000),
            finalize(() => this.loaderService.hide())
        );
    }
}
