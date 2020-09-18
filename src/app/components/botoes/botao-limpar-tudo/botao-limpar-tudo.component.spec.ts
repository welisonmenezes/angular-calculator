import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoLimparTudoComponent } from './botao-limpar-tudo.component';

describe('BotaoLimparTudoComponent', () => {
  let component: BotaoLimparTudoComponent;
  let fixture: ComponentFixture<BotaoLimparTudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoLimparTudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoLimparTudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
