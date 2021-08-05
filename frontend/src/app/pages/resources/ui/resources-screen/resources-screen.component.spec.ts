import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesScreenComponent } from './resources-screen.component';

describe('ResourcesScreenComponent', () => {
  let component: ResourcesScreenComponent;
  let fixture: ComponentFixture<ResourcesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
