import {Injectable} from '@angular/core';
import {Product} from './product';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductsService {

  products: Product[] = [];

  constructor(private api: ApiService) {
  }

  getAllProducts(): Observable<Product[]> {
    let data;
    data = this.api.getAllProducts();
    console.log(data);
    return data;
  }

}
