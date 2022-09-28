import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffect } from './store/products.effect';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature('myProducts', productReducer),
    EffectsModule.forFeature([ProductsEffect]),
    DataTablesModule
  ]
})
export class ProductsModule { }
