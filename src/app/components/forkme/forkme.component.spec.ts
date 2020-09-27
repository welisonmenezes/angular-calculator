import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkmeComponent } from './forkme.component';

describe('ForkmeComponent', () => {
  let component: ForkmeComponent;
  let fixture: ComponentFixture<ForkmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
