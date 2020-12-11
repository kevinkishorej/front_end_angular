import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidNavComponent } from './said-nav.component';

describe('SaidNavComponent', () => {
  let component: SaidNavComponent;
  let fixture: ComponentFixture<SaidNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaidNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaidNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
