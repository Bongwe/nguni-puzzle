import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakaZuluComponent } from './shaka-zulu.component';

describe('ShakaZuluComponent', () => {
  let component: ShakaZuluComponent;
  let fixture: ComponentFixture<ShakaZuluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShakaZuluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakaZuluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
