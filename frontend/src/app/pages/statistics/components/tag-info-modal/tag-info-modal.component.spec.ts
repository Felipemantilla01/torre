import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagInfoModalComponent } from './tag-info-modal.component';

describe('TagInfoModalComponent', () => {
  let component: TagInfoModalComponent;
  let fixture: ComponentFixture<TagInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
