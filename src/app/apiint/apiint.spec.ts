import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apiint } from './apiint';

describe('Apiint', () => {
  let component: Apiint;
  let fixture: ComponentFixture<Apiint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Apiint],
    }).compileComponents();

    fixture = TestBed.createComponent(Apiint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
