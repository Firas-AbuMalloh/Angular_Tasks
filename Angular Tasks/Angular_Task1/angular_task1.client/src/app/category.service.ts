import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _htt: HttpClient) { }

  getData() {
    return this._htt.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }

  getDataByID(): Observable<any> {
    return this._htt.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }
  getProductByID(id : any) {
    return this._htt.get<any>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`)
  }


  onSubmit(data: any)   {
    return this._htt.post("https://67d70f719d5e3a101529e70c.mockapi.io/user", data);
  }

  onLogIn() {
    return this._htt.get<any>("https://67d70f719d5e3a101529e70c.mockapi.io/user")
  }
}
