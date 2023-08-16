import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MousePadPage } from './mouse-pad.page';

describe('MousePadPage', () => {
  let component: MousePadPage;
  let fixture: ComponentFixture<MousePadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MousePadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
