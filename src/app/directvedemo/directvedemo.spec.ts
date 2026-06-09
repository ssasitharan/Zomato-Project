import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directvedemo } from './directvedemo';

describe('Directvedemo', () => {
  let component: Directvedemo;
  let fixture: ComponentFixture<Directvedemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Directvedemo],
    }).compileComponents();

    fixture = TestBed.createComponent(Directvedemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
