import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserViewComponent } from './single-user-view.component';

describe('SingleUserViewComponent', () => {
  let component: SingleUserViewComponent;
  let fixture: ComponentFixture<SingleUserViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleUserViewComponent]
    });
    fixture = TestBed.createComponent(SingleUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
