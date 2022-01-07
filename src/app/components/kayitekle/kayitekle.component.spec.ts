/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KayitekleComponent } from './kayitekle.component';

describe('KayitekleComponent', () => {
  let component: KayitekleComponent;
  let fixture: ComponentFixture<KayitekleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayitekleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayitekleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
