import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingIemComponent } from './shopping-iem.component';

describe('ShoppingIemComponent', () => {
  let component: ShoppingIemComponent;
  let fixture: ComponentFixture<ShoppingIemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingIemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingIemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
