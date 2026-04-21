import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponents } from './blog-components';

describe('BlogComponents', () => {
  let component: BlogComponents;
  let fixture: ComponentFixture<BlogComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
