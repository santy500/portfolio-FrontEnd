import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHabilidadesBlandasComponent } from './list-habilidades-blandas.component';

describe('ListHabilidadesBlandasComponent', () => {
  let component: ListHabilidadesBlandasComponent;
  let fixture: ComponentFixture<ListHabilidadesBlandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHabilidadesBlandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHabilidadesBlandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
