import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/tasks/model/task';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() task !: Task;
  @Output() added = new EventEmitter();

  public onChange(event : Event){
    const target = event.target as HTMLInputElement;
    //console.log(target.value);
    this.added.emit(target.value);
  }

}
