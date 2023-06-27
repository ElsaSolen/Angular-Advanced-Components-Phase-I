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

  counter = 0;

  constructor() {}

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    if (this.init > 0) {
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown(): void {
    setTimeout(() => {
      this.counter -= 1;
      this.processCountdown();
      this.onDecrease.emit(this.counter);
    }, 1000);
  }

  processCountdown(): void {
    if (this.counter === 0) {
      this.onComplete.emit();
    } else {
      this.doCountdown();
    }
  }
}
