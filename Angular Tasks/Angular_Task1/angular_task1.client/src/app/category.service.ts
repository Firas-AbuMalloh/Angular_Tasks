import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _htt: HttpClient) { }

  getData() {
    return this._htt.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }

  getDataByID() {
    return this._htt.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }
  getProductByID(id : any) {
    return this._htt.get<any>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`)
  }
}
