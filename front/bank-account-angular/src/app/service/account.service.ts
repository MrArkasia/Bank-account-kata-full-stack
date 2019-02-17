import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = `${environment.bankAccountApi}/account`;

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + '/all').pipe(
      map(this.extractData));
  }

  get(id): Observable<any> {
    let params = new HttpParams().set("accountId", id);
    return this.http.get(this.url, {params: params}).pipe(
      map(this.extractData));
  }

  add(name): Observable<any> {
    let params = new HttpParams().set("name", name);
    return this.http.post(this.url, {params: params}).pipe(
      map(this.extractData));
  }

}
