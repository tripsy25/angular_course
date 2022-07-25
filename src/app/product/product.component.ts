import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() productName: any; 
  @Input() productColor: any; 
  randomColor='';

  
  constructor(private productService: ProductsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes",changes);
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'productColor': 
            this.updateProfile(changes['productColor'].currentValue);
          break;
          case 'productName': {
            this.updateProfile(changes['productName'].currentValue);
          }
        }
      }
    }
  }

  updateProfile(f:any){
    console.log("Profile Updated");
    console.log("f",f);
  }
  
  ngOnInit(): void {
  }

  test(){
    console.log("Hello");
  }

  onClicked(){
    this.productService.deleteProducts(this.productName);
  }
}
