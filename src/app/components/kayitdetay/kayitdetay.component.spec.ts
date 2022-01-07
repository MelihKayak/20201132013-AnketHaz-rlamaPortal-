/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KayitdetayComponent } from './kayitdetay.component';

describe('KayitdetayComponent', () => {
  let component: KayitdetayComponent;
  let fixture: ComponentFixture<KayitdetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayitdetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayitdetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
