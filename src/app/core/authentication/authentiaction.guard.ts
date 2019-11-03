import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { Logger } from '../services/logger.service';
import { of } from 'rxjs';

const log = new Logger('AuthenticationGuard');

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authenticationService.isAuthenticated()) {
            return of(true);
        }

        log.debug('Not authenticated, redirecting and adding redirect url...');
        this.router.navigate(['/login'], {
            queryParams: { redirect: state.url },
            replaceUrl: true
        });
        return of(true);
    }
}
