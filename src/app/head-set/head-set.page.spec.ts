import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadSetPage } from './head-set.page';

describe('HeadSetPage', () => {
  let component: HeadSetPage;
  let fixture: ComponentFixture<HeadSetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeadSetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
