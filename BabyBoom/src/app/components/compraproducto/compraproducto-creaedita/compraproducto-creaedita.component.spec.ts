import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraproductoCreaeditaComponent } from './compraproducto-creaedita.component';

describe('CompraproductoCreaeditaComponent', () => {
  let component: CompraproductoCreaeditaComponent;
  let fixture: ComponentFixture<CompraproductoCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraproductoCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraproductoCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
