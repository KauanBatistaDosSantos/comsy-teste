import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherEntregadorComponent } from './escolher-entregador.component';

describe('EscolherEntregadorComponent', () => {
  let component: EscolherEntregadorComponent;
  let fixture: ComponentFixture<EscolherEntregadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolherEntregadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscolherEntregadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
