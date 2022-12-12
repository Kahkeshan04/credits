import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceedComponent } from './exceed.component';

describe('ExceedComponent', () => {
  let component: ExceedComponent;
  let fixture: ComponentFixture<ExceedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExceedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
