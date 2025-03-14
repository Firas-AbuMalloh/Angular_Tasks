import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private _ser: CategoryService, private _active: ActivatedRoute) { }


  categoryId: any;
  productsData: any;

  ngOnInit() {
    this.categoryId = this._active.snapshot.paramMap.get('id')
    this.get()
  }


  get() {
   
    this._ser.getDataByID().subscribe((data) => {

      this.productsData = data.filter((p: any) => p.categoryId == this.categoryId);
    });
  }



}
