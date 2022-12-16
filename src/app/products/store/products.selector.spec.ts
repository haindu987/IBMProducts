import { Products } from './products';
import { selectProducts } from './products.selector';


describe("Product Selector", () => {
    const initialState: Products[] = [
        {
            id: 1, uid: "342432", blend_name: "blend", notes: "notes", variety: "variety", origin: "origin", intensifier: "intense"
        },
        {
            id: 2, uid: "342431", blend_name: "blend1", notes: "notes1", variety: "variety1", origin: "origin1", intensifier: "intense1"
        }
    ];

    it("should select product list", () => {
        const result = selectProducts.projector(initialState);
        expect(result.length).toEqual(2);
    });
});