import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks: string[] = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.sayHello();
  }

  public form = new FormGroup({
    'task': new FormControl(null, [Validators.required])
  });

  public onFormSubmit() {
    this.tasks.push(this.form.value.task);
  }
}
