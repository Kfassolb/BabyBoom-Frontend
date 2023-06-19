import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraproductoListarComponent } from './compraproducto-listar.component';

describe('CompraproductoListarComponent', () => {
  let component: CompraproductoListarComponent;
  let fixture: ComponentFixture<CompraproductoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraproductoListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraproductoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
