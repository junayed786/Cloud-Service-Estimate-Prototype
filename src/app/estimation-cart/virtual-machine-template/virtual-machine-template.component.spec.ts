import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualMachineTemplateComponent } from './virtual-machine-template.component';

describe('VirtualMachineTemplateComponent', () => {
  let component: VirtualMachineTemplateComponent;
  let fixture: ComponentFixture<VirtualMachineTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualMachineTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualMachineTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
