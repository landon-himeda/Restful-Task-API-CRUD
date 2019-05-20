import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  oneTask;
  displayedTask;
  newTask;
  taskToUpdate;

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    this.newTask = {"title": "", "description": ""};
    this.taskToUpdate = {"title": "", "description": ""};
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe( (data) => {
      console.log(data);
      this.tasks = data["data"];
    })
  }

  getOneTaskFromService() {
    let observable = this._httpService.getOneTask();
    observable.subscribe( (data) => {
      console.log(data);
      this.oneTask = data["data"];
    })
  }

  changeDisplayedTask(task) {
    this.displayedTask = task;
  }

  create() {
    let observable = this._httpService.postNewTask(this.newTask);
    observable.subscribe( (data) => {
      console.log(data);
      this.newTask = {"title": "", "description": ""};
    })
  }

  update() {
    // let observable = this._httpService.postNewTask(this.newTask);
    // observable.subscribe( (data) => {
    //   console.log(data);
    //   this.newTask = {"title": "", "description": ""};
    // })
  }
}
