import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterShinjiruComponent } from './footer-shinjiru.component';

describe('FooterShinjiruComponent', () => {
  let component: FooterShinjiruComponent;
  let fixture: ComponentFixture<FooterShinjiruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterShinjiruComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterShinjiruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
