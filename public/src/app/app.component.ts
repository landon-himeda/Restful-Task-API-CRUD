import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  tasks = [];
  oneTask;

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    this.getTasksFromService();
    this.getOneTaskFromService();
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
}
