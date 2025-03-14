import { Component } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-catagory',
  standalone: false,
  templateUrl: './catagory.component.html',
  styleUrl: './catagory.component.css'
})
export class CatagoryComponent {


  ngOnInit() {
    this.get();
  }

  constructor(private _ser: CategoryService) {  }

  categoryData: any;

  get() {

    this._ser.getData().subscribe((data) => {
      this.categoryData = data;
    })
  }

}
