import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductsService} from '../products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input()
  products: Product[];

  constructor(private prodcutsService: ProductsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.map((data) => data['products']).subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
  }

}
