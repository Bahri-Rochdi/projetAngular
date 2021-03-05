import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEmployeurComponent } from './header-employeur.component';

describe('HeaderEmployeurComponent', () => {
  let component: HeaderEmployeurComponent;
  let fixture: ComponentFixture<HeaderEmployeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderEmployeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
