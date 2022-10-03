import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
          { title: 'Variety', data: 'variety' },
          { title: 'Notes', data: 'notes' },
          { title: 'Intensifier', data: 'intensifier' },
        ],
        rowCallback: (row: Node, data: any, index: number) => {
          $('td', row).on('click', () => {
            this.router.navigate(['product/' + data.uid]);
          });
          return row;
        }
      };
    });
  }

  ngOnInit(): void {
    this.store.dispatch(invokeProductsAPI());
  }
}
