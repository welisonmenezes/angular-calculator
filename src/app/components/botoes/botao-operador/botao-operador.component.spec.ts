import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoOperadorComponent } from './botao-operador.component';

describe('BotaoOperadorComponent', () => {
  let component: BotaoOperadorComponent;
  let fixture: ComponentFixture<BotaoOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoOperadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
