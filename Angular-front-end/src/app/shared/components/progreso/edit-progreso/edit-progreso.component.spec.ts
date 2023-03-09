import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgresoComponent } from './edit-progreso.component';

describe('EditProgresoComponent', () => {
  let component: EditProgresoComponent;
  let fixture: ComponentFixture<EditProgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProgresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
