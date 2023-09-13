import { Component } from '@angular/core';
import { Task } from '../../model/task';
import { TaskService } from '../../service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-task',
  templateUrl: './page-add-task.component.html',
  styleUrls: ['./page-add-task.component.scss']
})
export class PageAddTaskComponent {

  public init: Task = new Task();

  constructor(private taskService: TaskService, private router: Router) {}

  public onAdd(task : Task){
    this.taskService.postData(task).subscribe((data) => {
      // redirection
      this.router.navigate(['']);
    });
  }
  

  

}
