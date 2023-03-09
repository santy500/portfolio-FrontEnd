import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHabilidadesBlandasComponent } from './add-habilidades-blandas.component';

describe('AddHabilidadesBlandasComponent', () => {
  let component: AddHabilidadesBlandasComponent;
  let fixture: ComponentFixture<AddHabilidadesBlandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHabilidadesBlandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHabilidadesBlandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
