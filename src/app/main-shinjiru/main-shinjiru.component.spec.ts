import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShinjiruComponent } from './main-shinjiru.component';

describe('MainShinjiruComponent', () => {
  let component: MainShinjiruComponent;
  let fixture: ComponentFixture<MainShinjiruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainShinjiruComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainShinjiruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
