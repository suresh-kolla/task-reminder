import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynotificationComponent } from './mynotification.component';

describe('MynotificationComponent', () => {
  let component: MynotificationComponent;
  let fixture: ComponentFixture<MynotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
