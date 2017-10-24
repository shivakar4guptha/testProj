import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepieComponent } from './recepie/recepie.component';
import { RecepieListComponent } from './recepie/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepie/recepie-list/recepie-item/recepie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingIemComponent } from './shopping-list/shopping-iem/shopping-iem.component';
import { RecepieDetailComponent } from './recepie/recepie-detail/recepie-detail.component';
import { dropDownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shopping-list/shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepieComponent,
    RecepieListComponent,
    RecepieItemComponent,
    ShoppingListComponent,
    ShoppingIemComponent,
    RecepieDetailComponent,
    dropDownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
