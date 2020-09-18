import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoTrocarSinalComponent } from './botao-trocar-sinal.component';

describe('BotaoTrocarSinalComponent', () => {
  let component: BotaoTrocarSinalComponent;
  let fixture: ComponentFixture<BotaoTrocarSinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoTrocarSinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoTrocarSinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
