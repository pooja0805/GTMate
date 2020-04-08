import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EInfoComponent } from './e-info.component';

describe('EInfoComponent', () => {
  let component: EInfoComponent;
  let fixture: ComponentFixture<EInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
