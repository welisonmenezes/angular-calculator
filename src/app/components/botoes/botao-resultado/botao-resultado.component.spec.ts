import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoResultadoComponent } from './botao-resultado.component';

describe('BotaoResultadoComponent', () => {
  let component: BotaoResultadoComponent;
  let fixture: ComponentFixture<BotaoResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
