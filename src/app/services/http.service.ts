import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  get(url:string) {
    return this.http.get(url).catch(err => this.processRequestError(err));
  }

  post(url:string, data:any) {
    return this.http.post(url, data).catch(err => this.processRequestError(err));
  }

  processRequestError(err) {
    return Observable.throw(err);
  }

}
