import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { ProductsService } from '../products.service';
import { ProductsFetchAPISuccess, invokeProductsAPI } from './products.action';
import { selectProducts } from './products.selector';
 
@Injectable()
export class ProductsEffect {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store: Store
  ) {}
 
  loadAllProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeProductsAPI),
      withLatestFrom(this.store.pipe(select(selectProducts))),
      mergeMap(([, productformStore]) => {
        if (productformStore.length > 0) {
          return EMPTY;
        }
        return this.productsService
          .get()
          .pipe(map((data) => ProductsFetchAPISuccess({ allProducts: data })));
      })
    )
  );
}