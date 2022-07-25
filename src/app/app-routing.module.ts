import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component'
import { ProductsComponent } from './products.component'

const routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}