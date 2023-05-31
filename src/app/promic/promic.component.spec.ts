import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromicComponent } from './promic.component';

describe('PromicComponent', () => {
  let component: PromicComponent;
  let fixture: ComponentFixture<PromicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
