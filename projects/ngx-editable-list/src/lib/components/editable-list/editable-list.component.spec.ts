import { EditableListComponent } from './editable-list.component';
import { TestBed } from '@angular/core/testing/src/test_bed';
import { async, ComponentFixture } from '@angular/core/testing';

describe('EditableListComponent', () => {
  let component: EditableListComponent;
  let fixture: ComponentFixture<EditableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditableListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
