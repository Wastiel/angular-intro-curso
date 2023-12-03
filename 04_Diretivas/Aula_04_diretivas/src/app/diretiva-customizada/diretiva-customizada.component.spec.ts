import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaCustomizadaComponent } from './diretiva-customizada.component';

describe('DiretivaCustomizadaComponent', () => {
  let component: DiretivaCustomizadaComponent;
  let fixture: ComponentFixture<DiretivaCustomizadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaCustomizadaComponent]
    });
    fixture = TestBed.createComponent(DiretivaCustomizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
