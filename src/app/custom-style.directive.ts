import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[app-custom-style]'
})

export class CustomDirective{
    constructor(private el: ElementRef){
        el.nativeElement.style.display = "none";
    }
}