import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHabilidadesBlandasComponent } from './edit-habilidades-blandas.component';

describe('EditHabilidadesBlandasComponent', () => {
  let component: EditHabilidadesBlandasComponent;
  let fixture: ComponentFixture<EditHabilidadesBlandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHabilidadesBlandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHabilidadesBlandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
