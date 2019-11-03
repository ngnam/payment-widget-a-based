import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoadingService {
    isLoading: boolean = false;

    constructor() {}

    show() {
        setTimeout(() => {
            this.isLoading = true;
        }, 200);
    }
    hide() {
        setTimeout(() => {
            this.isLoading = false;
        }, 200);
    }
}
