import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsResultComponent } from './claims-result.component';

describe('ClaimsResultComponent', () => {
  let component: ClaimsResultComponent;
  let fixture: ComponentFixture<ClaimsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
