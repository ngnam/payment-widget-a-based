import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpParams
} from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class DataService {
  private httpHeaders = new HttpHeaders();
  private httpOptions = {};
  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      })
    };
    this.httpHeaders = new HttpHeaders(this.httpOptions);
  }
  get(uri: string, params?: HttpParams) {
    return this.httpClient
      .get(uri, { headers: this.httpHeaders, params })
      .pipe(map(this.extractData));
  }
  // api post method
  post(uri: string, data?: any, params?: HttpParams) {
    return this.httpClient
      .post(uri, data, {
        headers: this.httpHeaders,
        params
      })
      .pipe(map(this.extractData));
  }
  // api put method
  put(uri: string, data?: any, params?: HttpParams) {
    return this.httpClient
      .put(uri, data, {
        headers: this.httpHeaders,
        params
      })
      .pipe(map(this.extractData));
  }
  // api delete method
  delete(uri: string, params?: HttpParams) {
    return this.httpClient
      .delete(`${uri}`, {
        headers: this.httpHeaders,
        params
      })
      .pipe(map(this.extractData));
  }

  private extractData(res: HttpResponse<object>) {
    const body = res;
    return body || {};
  }

  private async handleError(error: any) {
    let message = '';
    if (error.status === 401) {
      message = 'Un authentication!';
    } else if (error.status === 403) {
      message = 'FORBIDDEN';
    } else {
      const errParse = JSON.parse(error._body).Message;
      message = errParse;
    }
    return throwError({ message, error });
  }
}
