import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestApprovedComponent } from './request-approved.component';

describe('RequestApprovedComponent', () => {
  let component: RequestApprovedComponent;
  let fixture: ComponentFixture<RequestApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
