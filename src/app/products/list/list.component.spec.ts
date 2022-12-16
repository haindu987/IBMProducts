import { CommonModule, Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DataTablesModule } from 'angular-datatables';
import { Products } from '../store/products';
import { productReducer } from '../store/products.reducer';
import { selectProducts } from '../store/products.selector';
import { ListComponent } from './list.component';
import { ProductsRoutingModule, routes } from "../products-routing.module";
describe('List Component', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;
    let mockStore: MockStore;
    let router: Router;
    let location: Location;

    const products: Products[] = [
        {
            id: 1, uid: "", blend_name: "blend", notes: "notes", variety: "variety", origin: "origin", intensifier: "intense"
        },
        {
            id: 2, uid: "342431", blend_name: "blend1", notes: "notes1", variety: "variety1", origin: "origin1", intensifier: "intense1"
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes), HttpClientTestingModule, StoreModule.forRoot(productReducer), DataTablesModule, CommonModule],
            declarations: [ListComponent],
            providers: [provideMockStore()]
        })
            .compileComponents();

        mockStore = TestBed.inject(MockStore);
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        mockStore.overrideSelector(selectProducts, products);
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.debugElement.componentInstance;
        component.rowClick(products[1]);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should have Products', () => {
        expect(component.products$.length).toEqual(2);
    });
});
