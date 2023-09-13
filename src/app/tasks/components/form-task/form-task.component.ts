import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../../model/task';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss']
})
export class FormTaskComponent {
  public form!: FormGroup;
  @Input() objTask!: Task;
  @Output() submitted = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: [this.objTask.id],
      name: [this.objTask.name],
      state: [this.objTask.state]
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
  public onDelete() {
    // console.log(this.objOrder.id);//
    this.deleted.emit(this.objTask.id);
  }

  
}
