import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Product} from './app/product';
import {ProductsService} from './app/products.service';

@Injectable()

export class ProductsResolver implements Resolve<Observable<Product[]>> {
  constructor(private productService: ProductsService) {

  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    return this.productService.getAllProducts();
  }
}
