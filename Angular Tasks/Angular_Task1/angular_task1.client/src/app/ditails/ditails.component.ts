import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ditails',
  standalone: false,  
  templateUrl: './ditails.component.html',
  styleUrl: './ditails.component.css'
})
export class DitailsComponent {


  constructor(private _ser: CategoryService, private _active: ActivatedRoute) { }

  idOfProduct: any;

  ngOnInit() {
    this.idOfProduct = this._active.snapshot.paramMap.get("id");

    this.get();
  }


  productDitails: any;

  get() {
    this._ser.getProductByID(this.idOfProduct).subscribe((data) => {

      this.productDitails = data;
    })
  }
}
