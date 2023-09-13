import { Component } from '@angular/core';
import { Task } from '../../model/task';
import { StateTask } from '../../enum/state-task';
import { TaskService } from '../../service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-tasks-list',
  templateUrl: './page-tasks-list.component.html',
  styleUrls: ['./page-tasks-list.component.scss']
})
export class PageTasksListComponent {
  public title = 'TODO LIST';

 
  public tab!: Task[]; 

  constructor(
    private taskService: TaskService,
    private router: Router
    ) {
      this.taskService.getData().subscribe((data) => {
        console.log(data);
        this.tab = data;
      });
    }
  // 2eme ecriture 
  // public datas!: Task[];

  // constructor(private taskService: TaskService, private router: Router) {
  //   // this.tasksService.getTasks().subscribe((data) => {
  //   //   console.log(data);
  //   //   this.datas = data;
  //   // });
  //   this.taskService.refreshCollection();
    
  //   this.taskService.collection$.subscribe(data=>{
  //     console.log(data);
  //     this.datas = data

  //   })
  // }
    onChangedState(task : Task, event : Event)  {
      console.log("count")
      const target = event.target as HTMLInputElement;

      this.taskService.changeState(task,target.checked).subscribe((data) => {
        console.log(data);
        task.state=data.state
        console.log(task)
      });

    }

    count(): number {
      return this.tab.length;
    }
    

    isCompleted(task:Task) : boolean{
      return task.state==StateTask.COMPLETED
    }

    editTask(task: Task): void {
      this.router.navigate(['edit', task.id]);
    }
    onSearchBar(taskName : string){
      const task = new Task({name:taskName})
      console.log(task)

      this.taskService.postData(task).subscribe((data) => {
      // redirection
      location.reload();
    });
    }


}
