import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: [];
  constructor(private _api: HttpService) { }

  ngOnInit() {
    this._api.get('products').subscribe((data: any) => {
      this.products = data;
    });
  }


  public deleteProduct(id, index) {
    this._api.delete(id).subscribe((data) => {
      this.products.splice(index);
    });
  }
}
