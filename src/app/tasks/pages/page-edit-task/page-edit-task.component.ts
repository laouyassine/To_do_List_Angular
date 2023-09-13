import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../model/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-edit-task',
  templateUrl: './page-edit-task.component.html',
  styleUrls: ['./page-edit-task.component.scss']
})
export class PageEditTaskComponent {

  public task!:Task;


  constructor(private activatedRoute: ActivatedRoute,
    private tasksService: TaskService,
    private router: Router){
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      if (id) {
        this.tasksService.getTaskById(id).subscribe((data) => {
  
          this.task = data;
          console.log(this.task);
        });
      }
    }

  public update(task : Task){
    this.tasksService.updateData(task).subscribe(() => {
      // redirection
      // console.log(data)
      this.router.navigate(['']);
      // console.log("cc")
    });
  }
  public onDelete(id: number) {
    // appel au service
    this.tasksService.delete(id).subscribe((data) => {
      console.log(data);
      // redirection
      this.router.navigate(['']);
      // console.log("delet")

    });
  }

}
