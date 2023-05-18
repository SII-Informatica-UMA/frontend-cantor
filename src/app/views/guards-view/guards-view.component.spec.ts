import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsViewComponent } from './guards-view.component';

describe('GuardsViewComponent', () => {
  let component: GuardsViewComponent;
  let fixture: ComponentFixture<GuardsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardsViewComponent]
    });
    fixture = TestBed.createComponent(GuardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
