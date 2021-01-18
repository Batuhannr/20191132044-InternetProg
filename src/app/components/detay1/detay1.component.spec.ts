/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Detay1Component } from './detay1.component';

describe('Detay1Component', () => {
  let component: Detay1Component;
  let fixture: ComponentFixture<Detay1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detay1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
