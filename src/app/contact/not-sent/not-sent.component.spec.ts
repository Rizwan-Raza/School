import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSentComponent } from './not-sent.component';

describe('NotSentComponent', () => {
  let component: NotSentComponent;
  let fixture: ComponentFixture<NotSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
