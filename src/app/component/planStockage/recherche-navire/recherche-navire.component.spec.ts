import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheNavireComponent } from './recherche-navire.component';

describe('RechercheNavireComponent', () => {
  let component: RechercheNavireComponent;
  let fixture: ComponentFixture<RechercheNavireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheNavireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheNavireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
