import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;

  constructor() {}

  ngOnInit(): void {}
}
