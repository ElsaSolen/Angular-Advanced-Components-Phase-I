import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { ProgressBarComponent } from './progressbar/progress-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CountdownComponent, ProgressBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
