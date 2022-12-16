import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Products } from '../store/products';
import { invokeProductsAPI } from '../store/products.action';
import { selectProducts } from '../store/products.selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products$: Products[] = [];
  dtOptions: DataTables.Settings = {};


  constructor(private store: Store, private router: Router) {
    this.store.pipe(select(selectProducts)).subscribe((data) => {
      this.products$ = data;
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        lengthMenu: [5, 10, 25, 50],
        data: this.products$,
        columns: [
          { title: 'Product Name', data: 'blend_name' },
          { title: 'Product Origin', data: 'origin' },
          { title: 'Variety', data: 'variety', className: 'd-none d-sm-table-cell' },
          { title: 'Notes', data: 'notes', className: 'd-none d-sm-table-cell' },
          { title: 'Intensifier', data: 'intensifier', className: 'd-none d-sm-table-cell' }
        ],
        rowCallback: (row: Node, data: any, index: number) => {
          row.addEventListener('click', (evt) => this.rowClick(data), false);
          return row;
        }
      };
    });
  }

  rowClick(data: any) {
    this.router.navigate(['product/' + data.uid]);
  }

  ngOnInit(): void {
    this.store.dispatch(invokeProductsAPI());
  }
}
