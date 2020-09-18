import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoNumeroComponent } from './botao-numero.component';

describe('BotaoNumeroComponent', () => {
  let component: BotaoNumeroComponent;
  let fixture: ComponentFixture<BotaoNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoNumeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
