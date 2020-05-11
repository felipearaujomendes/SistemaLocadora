import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProdutosComponent } from './create-produtos.component';

describe('CreateProdutosComponent', () => {
  let component: CreateProdutosComponent;
  let fixture: ComponentFixture<CreateProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
