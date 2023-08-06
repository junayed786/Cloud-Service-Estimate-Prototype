import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectStorageTemplateComponent } from './object-storage-template.component';

describe('ObjectStorageTemplateComponent', () => {
  let component: ObjectStorageTemplateComponent;
  let fixture: ComponentFixture<ObjectStorageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectStorageTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectStorageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
