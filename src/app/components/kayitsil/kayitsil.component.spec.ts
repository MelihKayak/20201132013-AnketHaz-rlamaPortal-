/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KayitsilComponent } from './kayitsil.component';

describe('KayitsilComponent', () => {
  let component: KayitsilComponent;
  let fixture: ComponentFixture<KayitsilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayitsilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayitsilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
