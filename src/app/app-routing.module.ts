import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 1 - redirection

  { path: '', redirectTo: '/tasks', pathMatch: 'full' },

  // 2 - route tasks , on va lui associer un module
  {
    path: 'tasks',
    loadChildren: () =>
      import('./tasks/tasks.module').then((m) => m.TasksModule),
  },
 

 
  // {
  //   path: '**',
  //   loadChildren: () =>
  //     import('./core').then((m) => m.),
  // },


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
