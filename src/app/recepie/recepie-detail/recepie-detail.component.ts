import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  @Input() recepie: Recepie;
  constructor(private recepieService: RecepieService) { }
  addingIng(){
    console.log('hello ' + this.recepie.ingredients);
    this.recepieService.updateIngredient(this.recepie.ingredients);
  }
  ngOnInit() {
  }
  
}
