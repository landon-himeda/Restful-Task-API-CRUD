import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  // oneTask;
  displayedTask: any;
  newTask = {"title": "", "description": ""};
  allTasksRetrieved = false;

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe( (data) => {
      console.log(data);
      this.tasks = data["data"];
      this.allTasksRetrieved = true;
    })
  }

  // getOneTaskFromService() {
  //   let observable = this._httpService.getOneTask();
  //   observable.subscribe( (data) => {
  //     console.log(data);
  //     this.oneTask = data["data"];
  //   })
  // }

  changeDisplayedTask(task) {
    this.displayedTask = task;
  }

  create() {
    let observable = this._httpService.postNewTask(this.newTask);
    observable.subscribe( (data) => {
      console.log(data);
      this.newTask = {"title": "", "description": ""};
      let observable2 = this._httpService.getTasks();
      observable2.subscribe( (data) => {
        console.log(data);
        this.tasks = data["data"];
        this.allTasksRetrieved = true;
      });
    })
  }

  deleteTaskThroughService(task) {
    let observable = this._httpService.deleteTask(task);
    observable.subscribe( (data) => {
      console.log(data);
      let observable2 = this._httpService.getTasks();
      observable2.subscribe( (data) => {
        console.log(data);
        this.tasks = data["data"];
        this.allTasksRetrieved = true;
      });
    });
  }
}
