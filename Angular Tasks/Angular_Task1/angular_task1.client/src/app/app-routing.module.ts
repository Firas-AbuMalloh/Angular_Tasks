import { NgModule, ɵisViewDirty } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoryComponent } from './catagory/catagory.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { DitailsComponent } from './ditails/ditails.component';

const routes: Routes = [

  { path: "catagory", component: CatagoryComponent },
  { path: "product/:id", component: ProductComponent },

  { path: "ViewDitails/:id", component: DitailsComponent },

  { path: "", pathMatch: "full", component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
