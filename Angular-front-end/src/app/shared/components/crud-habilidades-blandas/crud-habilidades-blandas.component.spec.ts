import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudHabilidadesBlandasComponent } from './crud-habilidades-blandas.component';

describe('CrudHabilidadesBlandasComponent', () => {
  let component: CrudHabilidadesBlandasComponent;
  let fixture: ComponentFixture<CrudHabilidadesBlandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudHabilidadesBlandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudHabilidadesBlandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
