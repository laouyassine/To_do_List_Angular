import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTasksListComponent } from './pages/page-tasks-list/page-tasks-list.component';
import { PageEditTaskComponent } from './pages/page-edit-task/page-edit-task.component';
import { PageAddTaskComponent } from './pages/page-add-task/page-add-task.component';
import { CoreModule } from '../core/core.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { SearchBarComponent } from '../core/components/search-bar/search-bar/search-bar.component';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageTasksListComponent,
    PageEditTaskComponent,
    PageAddTaskComponent,
    FormTaskComponent
  ],
  imports: [
    CommonModule,TasksRoutingModule,CoreModule,ReactiveFormsModule
  ]
})
export class TasksModule { }
