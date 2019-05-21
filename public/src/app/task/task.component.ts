import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskToUpdate;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  update() {
    let observable = this._httpService.updateTask(this.taskToUpdate);
    observable.subscribe( (data) => {
      console.log(data);
    })
  }

}
