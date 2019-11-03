import { HttpParams } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // tslint:disable-next-line: no-bitwise
    const r = (Math.random() * 16) | 0,
      // tslint:disable-next-line: no-bitwise
      // tslint:disable-next-line: triple-equals
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function fmt<TObject>(text: string, myHash: TObject) {
  let key;
  // tslint:disable-next-line: forin
  for (key in myHash) {
    text = text.replace(new RegExp('\\{' + key + '\\}', 'gm'), myHash[key]);
  }
  return text;
}

export function isNotEmpty(obj: any) {
  return obj !== null || obj !== undefined || obj !== '' || obj !== ' ';
}

// tslint:disable-next-line: ban-types
export function mapToHttpParamsQuery(params: Object) {
  let httpParams: HttpParams = new HttpParams();
  for (const property in params) {
    if (params.hasOwnProperty(property) && isNotEmpty(params[property])) {
      httpParams = httpParams.set(property, params[property]);
    }
  }
  return httpParams;
}
