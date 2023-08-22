import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileStorageTemplateComponent } from './file-storage-template.component';

describe('FileStorageTemplateComponent', () => {
  let component: FileStorageTemplateComponent;
  let fixture: ComponentFixture<FileStorageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileStorageTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileStorageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
