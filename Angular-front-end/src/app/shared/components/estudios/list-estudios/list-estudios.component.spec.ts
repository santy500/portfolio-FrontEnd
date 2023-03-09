import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEstudiosComponent } from './list-estudios.component';

describe('ListEstudiosComponent', () => {
  let component: ListEstudiosComponent;
  let fixture: ComponentFixture<ListEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEstudiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
