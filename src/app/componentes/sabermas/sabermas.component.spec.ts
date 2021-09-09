/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SabermasComponent } from './sabermas.component';

describe('SabermasComponent', () => {
  let component: SabermasComponent;
  let fixture: ComponentFixture<SabermasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabermasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SabermasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
