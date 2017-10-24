import { EventEmitter } from "@angular/core";
import { Recepie } from "./recepie.model";


export class RecepieService {
    recepieSelected = new EventEmitter<Recepie>();
    recepies : Recepie[]=[
        new Recepie('tikka masala','yummy curry','https://i0.wp.com/www.cookingfromheart.com/wp-content/uploads/2017/03/Paneer-Tikka-Masala-4.jpg?resize=600%2C400'),
        new Recepie('Biryani','Veg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0TSlk2p0XPTib1s2tC8ZYthW8k1VyrD3tsi1arMHCPn2BTTiOA'),
        new Recepie('salan','Veg','data:image/jpeg;base64,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')
      ];
      getRecepies(){
        return this.recepies.slice();
    }
    

}

