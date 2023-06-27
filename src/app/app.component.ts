import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  progressPercentage = 0;
  totalCountdown = 15;

  constructor() {}

  ngOnInit(): void {}
  updateProgress($event): void {
    this.progressPercentage =
      ((this.totalCountdown - $event) / this.totalCountdown) * 100;
  }
  completeProgress(): void {
    console.log('countdown finished');
  }
}
