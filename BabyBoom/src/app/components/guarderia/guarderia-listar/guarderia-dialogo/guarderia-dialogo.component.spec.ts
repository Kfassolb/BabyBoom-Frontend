import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarderiaDialogoComponent } from './guarderia-dialogo.component';

describe('GuarderiaDialogoComponent', () => {
  let component: GuarderiaDialogoComponent;
  let fixture: ComponentFixture<GuarderiaDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuarderiaDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuarderiaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
