import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailspComponent } from './detailsp.component';

describe('DetailsComponent', () => {
  let component: DetailspComponent;
  let fixture: ComponentFixture<DetailspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
