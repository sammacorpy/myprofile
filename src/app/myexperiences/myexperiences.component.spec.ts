import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyexperiencesComponent } from './myexperiences.component';

describe('MyexperiencesComponent', () => {
  let component: MyexperiencesComponent;
  let fixture: ComponentFixture<MyexperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyexperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyexperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
