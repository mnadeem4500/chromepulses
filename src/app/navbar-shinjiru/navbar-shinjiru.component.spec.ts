import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarShinjiruComponent } from './navbar-shinjiru.component';

describe('NavbarShinjiruComponent', () => {
  let component: NavbarShinjiruComponent;
  let fixture: ComponentFixture<NavbarShinjiruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarShinjiruComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarShinjiruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
