import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { select, Store } from '@ngrx/store';
import { Products } from '../store/products';
import { selectProducts } from '../store/products.selector';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  uid: string = '';
  product!: Products;
  constructor(private route: ActivatedRoute, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.uid = this.route.snapshot.paramMap.get('uid') || '';
    this.store.pipe(select(selectProducts)).subscribe((data) => {
      this.product = data.filter(d => d.uid === this.uid)[0];
    });
  }

  onBack(): void {
    this.router.navigate(['/']);
  }

}
