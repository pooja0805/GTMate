import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfallsComponent } from './waterfalls.component';

describe('WaterfallsComponent', () => {
  let component: WaterfallsComponent;
  let fixture: ComponentFixture<WaterfallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterfallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterfallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
