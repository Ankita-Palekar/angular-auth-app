import {Injectable} from '@angular/core';
import {environment} from '../environments/environment.prod';
import {Http, Response} from '@angular/http';
import {Product} from './product';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  constructor(private http: Http) {
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get(API_URL + '/products').map(response => {
      return response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
