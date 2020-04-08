import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachComponent } from './beach.component';

describe('BeachComponent', () => {
  let component: BeachComponent;
  let fixture: ComponentFixture<BeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
