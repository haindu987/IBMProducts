import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './store/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Products[]>('https://random-data-api.com/api/coffee/random_coffee?size=50')
  }
}
