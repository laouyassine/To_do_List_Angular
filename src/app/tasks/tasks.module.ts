import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTasksListComponent } from './pages/page-tasks-list/page-tasks-list.component';
import { PageEditTaskComponent } from './pages/page-edit-task/page-edit-task.component';
import { PageAddTaskComponent } from './pages/page-add-task/page-add-task.component';



@NgModule({
  declarations: [
    PageTasksListComponent,
    PageEditTaskComponent,
    PageAddTaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
