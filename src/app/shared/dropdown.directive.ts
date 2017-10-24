import { Directive, OnInit, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[dropDown]'
})
export class dropDownDirective {
@HostBinding('class.open') openClass: boolean;
    constructor() {      
    }
    
@HostListener ('click') openDropDown(eventData:Event){
    console.log('dropdown clicked');
    this.openClass = !this.openClass;
    }
@HostListener ('focusout') closeDropDown(eventData:Event){
        console.log('dropdown clicked');
        this.openClass = false;
        }
}