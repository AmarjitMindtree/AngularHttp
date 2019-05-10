import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpParameterCodec
} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { User } from '../../../core/_models';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as bcrypt from 'bcryptjs';

(window as any).global = window;

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  observe: 'response' as 'body',
  params: null,
  reportProgress: true,
  responseType: 'json' as 'json',
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  httpParameterCodec: HttpParameterCodec = {
    encodeKey: (key: string) => this.standardEncoding(key),
    decodeKey: (key: string) => decodeURIComponent(key),
    encodeValue: (val: string) => this.standardEncoding(val),
    decodeValue: (val: string) => decodeURIComponent(val)
  };

  standardEncoding(v: string): string {
    return encodeURIComponent(v)
      .replace(/%40/gi, '@')
      .replace(/%3A/gi, ':')
      .replace(/%24/gi, '$')
      .replace(/%2C/gi, ',')
      .replace(/%3B/gi, ';')
      .replace(/%2B/gi, '+')
      .replace(/%3D/gi, '=')
      .replace(/%3F/gi, '?')
      .replace(/%2F/gi, '/');
  }

  // login user
  login(requestParam: { userName: string, password: string }): Observable<HttpResponse<object>> {
    options.headers = options.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    options.params =  new HttpParams({ fromObject: requestParam, encoder: this.httpParameterCodec });
    return this.http.get<HttpResponse<Observable<object>>>
    (`${environment.API_URL}usersData`, options)
    .pipe(
      // retry(3),
      catchError(this.handleError)
    );
  }

  saveUser(user: any): Observable<object> {
    return this.http.post(`${environment.API_URL}usersData`, user);
  }

  // Get user details
  getUsers(id: number): Observable<HttpResponse<User>> {
    return this.http.get<HttpResponse<User>>(`${environment.API_URL}usersData`, { observe: 'body' })
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete<User>(`${environment.API_URL}usersData/${id}`, { observe: 'response'});
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      console.error('An error occured: ', err.error.message);
    } else {
      console.error('Server error respose code: ', err.status);
      console.error('Body was: ', err.error);
    }
    return throwError('Something bad happened, please try again');
  }
}
