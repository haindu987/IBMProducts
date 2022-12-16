import { ProductsFetchAPISuccess, invokeProductsAPI } from './products.action';
import { Products } from './products';
import * as fromReducers from './products.reducer';


describe('ProductReducer', () => {
    it('Unknown Action should return default state', () => {
        const { initialState } = fromReducers;
        const action = invokeProductsAPI();
        const state = fromReducers.productReducer(initialState, action);
        expect(state).toBe(initialState);
    });

    it('Success action should match new state', () => {
        const { initialState } = fromReducers;
        const newState: Array<Products> = [{ id: 1, uid: "343232423432", blend_name: "blend", variety: "variety", notes: "notes", origin: "origin", intensifier: "intensece" }]
        const action = ProductsFetchAPISuccess({ allProducts: newState })
        const state = fromReducers.productReducer(initialState, action);
        expect(state).toBe(newState);
    });
});