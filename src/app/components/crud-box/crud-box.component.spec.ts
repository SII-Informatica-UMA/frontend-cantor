import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBoxComponent } from './crud-box.component';

describe('CrudBoxComponent', () => {
  let component: CrudBoxComponent;
  let fixture: ComponentFixture<CrudBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudBoxComponent]
    });
    fixture = TestBed.createComponent(CrudBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
