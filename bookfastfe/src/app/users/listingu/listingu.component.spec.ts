import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinguComponent } from './listingu.component';

describe('ListinguComponent', () => {
  let component: ListinguComponent;
  let fixture: ComponentFixture<ListinguComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListinguComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
