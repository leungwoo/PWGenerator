import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passgen1Component } from './passgen1.component';

describe('Passgen1Component', () => {
  let component: Passgen1Component;
  let fixture: ComponentFixture<Passgen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Passgen1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Passgen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
