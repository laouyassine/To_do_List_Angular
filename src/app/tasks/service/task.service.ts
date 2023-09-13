import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { StateTask } from '../enum/state-task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}

  public configUrl = 'http://localhost:3000/tasks';

  // observable pour stocker le tableau
  // collection$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  public getData(): Observable<Task[]> {
    return this.http.get<Task[]>(this.configUrl);
  }

    //  alimenter collection$ avec résultat de l'appel http

  // refreshCollection() : void{
  //   this.http.get<Task[]>(this.configUrl).subscribe((data) => {
  //     // side effect to update this.collection$
  //     // pas besoin de return
  //     this.collection$.next(data);
  //   });
  // }


  public postData(task : Task): Observable<Task> {
    return this.http.post<Task>(this.configUrl, task)
  }

  // postTasks(task: Task): Observable<Task> {
  //   return this.http.post<Task>(this.configUrl, task).pipe(
  //     tap(() => {
  //       this.refreshCollection();
  //     })
  //   );
  // }

  public getTaskById(id : number): Observable<Task> {
    return this.http.get<Task>(`${this.configUrl}/${id}`);
  }

  public updateData(obj: Task): Observable<Task> {
    return this.http.put<Task>(`${this.configUrl}/${obj.id}`, obj);
  }

  public delete(id: number): Observable<Task>{
    return this.http.delete<Task>(`${this.configUrl}/${id}`);
  }

  public changeState (task:Task, checked:boolean):Observable<Task>{
    const targetTask = new Task(task);
    if (checked ===true){
      targetTask.state = StateTask.COMPLETED
    }
    else{
      targetTask.state = StateTask.INPROGRESS
    }
    return this.updateData(targetTask)
  }

 


}

