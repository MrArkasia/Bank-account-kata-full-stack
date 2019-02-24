import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private url = `${environment.bankAccountApi}/operation`;

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  public deposit(id, amount): Observable<any> {
    return this.http.post(this.url + "/deposit?accountId=" + id + "&amount=" + amount, {})
      .pipe(map(this.extractData));
  }

  public withdrawal(id, amount): Observable<any> {
    return this.http.post(this.url + "/withdrawal?accountId=" + id + "&amount=" + amount, {})
      .pipe(map(this.extractData));
  }

  public getHistory(id): Observable<any> {
    let params = new HttpParams().set('accountId', id);
    return this.http.get(this.url, {params: params})
      .pipe(map(this.extractData));
  }

}
