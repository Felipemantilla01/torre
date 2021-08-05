import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTagModalComponent } from './type-tag-modal.component';

describe('TypeTagModalComponent', () => {
  let component: TypeTagModalComponent;
  let fixture: ComponentFixture<TypeTagModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTagModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTagModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
