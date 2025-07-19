import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebeasComponent } from './pruebeas.component';

describe('PruebeasComponent', () => {
  let component: PruebeasComponent;
  let fixture: ComponentFixture<PruebeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
