import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AInfoComponent } from './a-info.component';

describe('AInfoComponent', () => {
  let component: AInfoComponent;
  let fixture: ComponentFixture<AInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
