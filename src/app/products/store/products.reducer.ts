import { createReducer, on } from '@ngrx/store';
import { Products } from './products';
import { ProductsFetchAPISuccess } from './products.action';
 
export const initialState: ReadonlyArray<Products> = [];
 
export const productReducer = createReducer(
  initialState,
  on(ProductsFetchAPISuccess, (state, { allProducts }) => {
    return allProducts;
  })
);