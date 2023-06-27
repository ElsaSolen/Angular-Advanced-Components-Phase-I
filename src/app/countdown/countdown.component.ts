import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  @Input() init = 0;
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  private countdownTimerRef: any = null;
  counter = 0;

  constructor() {}

  ngOnInit(): void {}

  startCountdown(): void {
    if (this.init > 0) {
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown(): void {
    this.countdownTimerRef = setTimeout(() => {
      this.counter -= 1;
      this.processCountdown();
      this.onDecrease.emit(this.counter);
    }, 1000);
  }

  private clearTimeout(): void {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

  processCountdown(): void {
    if (this.counter === 0) {
      this.onComplete.emit();
    } else {
      this.doCountdown();
    }
  }
}
