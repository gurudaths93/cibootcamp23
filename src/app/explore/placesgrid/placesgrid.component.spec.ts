import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesgridComponent } from './placesgrid.component';

describe('PlacesgridComponent', () => {
  let component: PlacesgridComponent;
  let fixture: ComponentFixture<PlacesgridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacesgridComponent]
    });
    fixture = TestBed.createComponent(PlacesgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
