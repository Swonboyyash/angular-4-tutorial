import { Directive, TemplateRef, ViewContainerRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]', 
})

// Adds a certain CSS class to the element is click, and remove when it is clicked again.
export class DropdownDirective {
    @HostBinding('class.open') toogleDropDown = false;
   
    isOpen = false;

    @HostListener('click') toggleOpen() {
        this.toogleDropDown = !this.toogleDropDown;
    }
}
