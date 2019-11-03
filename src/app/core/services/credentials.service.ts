import { Injectable } from '@angular/core';

interface Credentials {
    userName: string;
    token: string;
}

const CURRENT_USER = 'CURRENT_USER';

/**
 * author: namnv39
 */
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
@Injectable()
export class CredentialsService {
    // tslint:disable-next-line: variable-name
    private _credentials: Credentials | null = null;

    constructor() {
        const savedCredentials =
            sessionStorage.getItem(CURRENT_USER) ||
            localStorage.getItem(CURRENT_USER);
        if (savedCredentials) {
            this._credentials = JSON.parse(savedCredentials);
        }
    }

    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    isAuthenticated(): boolean {
        return !!this._credentials;
    }

    /**
     * Gets the user credentials.
     * @return The user credentials or null if the user is not authenticated.
     */
    get credentials(): Credentials | null {
        return this._credentials;
    }

    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    setCredentials(credentials?: Credentials, remember?: boolean) {
        this._credentials = credentials || null;
        if (credentials) {
            const storage = remember ? localStorage : sessionStorage;
            storage.setItem(CURRENT_USER, JSON.stringify(credentials));
        } else {
            sessionStorage.removeItem(CURRENT_USER);
            localStorage.removeItem(CURRENT_USER);
        }
    }
}
