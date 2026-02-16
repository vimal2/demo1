import { Component, Input } from '@angular/core';
import Product from 'src/app/model/product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

  @Input() product: Product  = {
    id: 0,
    title: '',
    price: 0,
    description: ''
  };

}
