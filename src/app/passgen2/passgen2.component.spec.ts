import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passgen2Component } from './passgen2.component';

describe('Passgen2Component', () => {
  let component: Passgen2Component;
  let fixture: ComponentFixture<Passgen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Passgen2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Passgen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
