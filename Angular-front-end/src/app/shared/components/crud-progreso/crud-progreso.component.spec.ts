import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProgresoComponent } from './crud-progreso.component';

describe('CrudProgresoComponent', () => {
  let component: CrudProgresoComponent;
  let fixture: ComponentFixture<CrudProgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProgresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
