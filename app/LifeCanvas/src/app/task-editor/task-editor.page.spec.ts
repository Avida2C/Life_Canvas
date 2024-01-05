import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskEditorPage } from './task-editor.page';

describe('TaskEditorPage', () => {
  let component: TaskEditorPage;
  let fixture: ComponentFixture<TaskEditorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TaskEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
