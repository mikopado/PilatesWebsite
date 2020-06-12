import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTypeComponent } from './class-type.component';

describe('ClassTypeComponent', () => {
  let component: ClassTypeComponent;
  let fixture: ComponentFixture<ClassTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
