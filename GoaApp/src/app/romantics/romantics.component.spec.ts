import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanticsComponent } from './romantics.component';

describe('RomanticsComponent', () => {
  let component: RomanticsComponent;
  let fixture: ComponentFixture<RomanticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomanticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
