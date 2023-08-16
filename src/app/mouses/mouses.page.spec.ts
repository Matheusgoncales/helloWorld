import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MousesPage } from './mouses.page';

describe('MousesPage', () => {
  let component: MousesPage;
  let fixture: ComponentFixture<MousesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MousesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
