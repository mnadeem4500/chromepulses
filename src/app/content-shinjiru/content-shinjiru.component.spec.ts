import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentShinjiruComponent } from './content-shinjiru.component';

describe('ContentShinjiruComponent', () => {
  let component: ContentShinjiruComponent;
  let fixture: ComponentFixture<ContentShinjiruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentShinjiruComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentShinjiruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
