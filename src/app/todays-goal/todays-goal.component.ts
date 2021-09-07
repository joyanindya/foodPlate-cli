import { Component, OnInit } from '@angular/core';
import { TodaysGoalService } from '../services/todays-goal.service';

@Component({
  selector: 'fp-todays-goal',
  templateUrl: './todays-goal.component.html',
  styleUrls: ['./todays-goal.component.css']
})
export class TodaysGoalComponent implements OnInit {

  goals: Array<string> = [
    'Eat More Fruit',
    'Master rxjs',
    'Do 500 push ups',
    'Eat more vegetables',
    'Eat 1 bag of potato chips'
  ];

  sendGoal(goal):void{
      this.todaysGoalService.sendgoal(goal);  
  }

  clearGoal(){
    this.todaysGoalService.clearGoal();
  }

  constructor(private todaysGoalService: TodaysGoalService) { }

  ngOnInit(): void {

  }

}
