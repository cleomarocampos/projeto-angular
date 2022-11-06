import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTrashComponent } from './car-trash.component';

describe('CarTrashComponent', () => {
  let component: CarTrashComponent;
  let fixture: ComponentFixture<CarTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTrashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
