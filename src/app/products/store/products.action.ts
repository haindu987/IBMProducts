import { createAction, props } from '@ngrx/store';
import { Products } from './products';
 
export const invokeProductsAPI = createAction(
  '[Products API] Invoke Products Fetch List API'
);
 
export const ProductsFetchAPISuccess = createAction(
  '[Products API] Fetch API Success',
  props<{ allProducts: Products[] }>()
);