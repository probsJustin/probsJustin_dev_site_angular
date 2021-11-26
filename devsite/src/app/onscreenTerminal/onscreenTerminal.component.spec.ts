import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnScreenTerminalComponent } from './onscreenTerminal.component';

describe('OnScreenTerminalComponent', () => {
  let component: OnScreenTerminalComponent;
  let fixture: ComponentFixture<OnScreenTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnScreenTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnScreenTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
