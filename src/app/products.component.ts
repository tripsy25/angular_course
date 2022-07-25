import { formatCurrency } from "@angular/common";
import { IfStmt } from "@angular/compiler";
import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { firstValueFrom, Subscription } from "rxjs";
import { ProductsService } from "./products.service";

@Component({
    selector:'app-products',
    templateUrl:'./products.component.html',
    styleUrls:[]
})

export class ProductsComponent implements OnInit, OnDestroy {
    isDisabled = true
    productName = 'A Book';
    productColor = '';
    product=[] ;
    hellog = 'hello'
    @ViewChild('productTemplate') testProductTemplate:any;
    @Output() productClicked = new EventEmitter();

    private productsSubscription: Subscription = new Subscription; 
    
    products = ['A Tree'];
    constructor(private productsService: ProductsService){
        
        setTimeout(()=>{
            // this.productName = 'A Tree'
            this.isDisabled = false
        },3000);
    }
;

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
        this.productsSubscription = this.productsService.productsUpdated.subscribe(()=>{
            this.products = this.productsService.getProducts();
        });
    }

    colorChangeAndAddProductOnClick(){
        this.productColor = '#'+ Math.floor(Math.random()*16777215).toString(16); 
        this.products.push(this.productName,this.productColor);
    }

    onAddProduct(form:any){
        // console.log(form);
        // this.productColor = '#'+ Math.floor(Math.random()*16777215).toString(16); 
        this.productsService.addProduct(form.value.productName);
        
        // if(form.valid){

        //     // this.products.push({name:form.value.productName,color:this.productColor});
        //     // this.products.push(form.value.productName);
        // }
    }

    onRemoveProduct(productName: any){
        this.products = this.products.filter(t=> t !== productName);
    }

    ngOnDestroy(){
        this.productsSubscription.unsubscribe();
    }
}