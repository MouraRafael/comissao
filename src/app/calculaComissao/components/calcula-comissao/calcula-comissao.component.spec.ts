import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaComissaoComponent } from './calcula-comissao.component';

describe('CalculaComissaoComponent', () => {
  let component: CalculaComissaoComponent;
  let fixture: ComponentFixture<CalculaComissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculaComissaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculaComissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
