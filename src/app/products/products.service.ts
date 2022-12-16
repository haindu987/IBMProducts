import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './store/products';
import { prURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}
    elements: number = 50;
    get() {
      return this.http.get<Products[]>(prURL + `?size=${this.elements}`);
    }

 
}
