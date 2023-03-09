import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudInfoPersonalComponent } from './crud-info-personal.component';

describe('CrudInfoPersonalComponent', () => {
  let component: CrudInfoPersonalComponent;
  let fixture: ComponentFixture<CrudInfoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudInfoPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudInfoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
