import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsuComponent } from './detailsu.component';

describe('DetailsuComponent', () => {
  let component: DetailsuComponent;
  let fixture: ComponentFixture<DetailsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
