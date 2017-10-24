import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    showRecepie;
    trigger($event){
      if( $event == "Clicked"){
        this.showRecepie = true;
      }
      else{
       this.showRecepie = false;
      }
    }
}
