import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Themebtn } from './themebtn';

describe('Themebtn', () => {
  let component: Themebtn;
  let fixture: ComponentFixture<Themebtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Themebtn],
    }).compileComponents();

    fixture = TestBed.createComponent(Themebtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
