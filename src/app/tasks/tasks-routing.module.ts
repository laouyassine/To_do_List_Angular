import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "../core/errors/pages/page-not-found/page-not-found.component";
import { PageAddTaskComponent } from "./pages/page-add-task/page-add-task.component";
import { PageEditTaskComponent } from "./pages/page-edit-task/page-edit-task.component";
import { NgModule } from "@angular/core";
import { PageTasksListComponent } from "./pages/page-tasks-list/page-tasks-list.component";
import { CoreModule } from "../core/core.module";

const routes: Routes = [
    { path: '', component: PageTasksListComponent },
    { path: 'add', component: PageAddTaskComponent },
    { path: 'edit/:id', component: PageEditTaskComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes),CoreModule],
    exports: [RouterModule],
  })
  export class TasksRoutingModule {}