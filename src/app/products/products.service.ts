import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './store/products';
import { prURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Products[]>(prURL);
  }
}
