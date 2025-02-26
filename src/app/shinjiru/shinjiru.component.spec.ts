import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinjiruComponent } from './shinjiru.component';

describe('ShinjiruComponent', () => {
  let component: ShinjiruComponent;
  let fixture: ComponentFixture<ShinjiruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShinjiruComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShinjiruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
