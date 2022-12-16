import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductsService } from '../products.service';
import { Products } from '../store/products';
import { productReducer } from '../store/products.reducer';
import { selectProducts } from '../store/products.selector';
import { DetailsComponent } from './details.component';
describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let mockStore: MockStore;
  let mockProductsSelector;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, StoreModule.forRoot(productReducer)],
      providers: [ProductsService, provideMockStore()]
    })
      .compileComponents();

    const initialState: Products[] = [
      {
        id: 1, uid: "", blend_name: "blend", notes: "notes", variety: "variety", origin: "origin", intensifier: "intense"
      },
      {
        id: 2, uid: "342431", blend_name: "blend1", notes: "notes1", variety: "variety1", origin: "origin1", intensifier: "intense1"
      }
    ];

    mockStore = TestBed.inject(MockStore);
    mockProductsSelector = mockStore.overrideSelector(selectProducts, initialState);
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.debugElement.componentInstance;
    component.onBack();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
