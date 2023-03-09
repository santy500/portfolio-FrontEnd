import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgresoComponent } from './add-progreso.component';

describe('AddProgresoComponent', () => {
  let component: AddProgresoComponent;
  let fixture: ComponentFixture<AddProgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProgresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
