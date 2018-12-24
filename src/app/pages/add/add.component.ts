import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public categories: [];
  public form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl('')
  });
  constructor(private _api: HttpService) { }

  ngOnInit() {
    this.getCategories();
  }


  public getCategories() {
    this._api.get('categories').subscribe((data: any) => {
      this.categories = data;
    });
  }

  public onSubmit() {
    const formData = this.form.value;
    const id = +formData.category;
    formData.category = {};
    formData.category.id = id;
    this._api.post('product', formData).subscribe((data) => {
      console.log('data', data);
    });
  }

}
