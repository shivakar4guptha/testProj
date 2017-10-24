import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class  HeaderComponent implements OnInit {
   @Output() eventEmitter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  recepieClick(){
    this.eventEmitter.emit('Clicked');
  }
  shoppingClick(){
    this.eventEmitter.emit('ShoppingCLicked');
  }


}
