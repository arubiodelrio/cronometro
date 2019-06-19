import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.css']
})
export class ChronometerComponent implements OnInit {

  minutes: number;
  seconds: number;
  millis: number;
  running: boolean;
  interval: number;

  constructor() { 
    this.minutes=0;
    this.seconds=0;
    this.millis=0;
    this.interval=0;
    this.running=false;    
  }

  ngOnInit() {
  }

  
  _handleStartClick()  {
      if (!this.running)
      {
          this.running = true;
          this.interval = setInterval(() => {
            this.tic();}
            ,100);
      } 
  }

  _handleStopClick() {
      if (this.running)
      {
          this.running=false;
          clearInterval(this.interval);
      }
  }

  _handleResetClick()  {
      this._handleStopClick();
      this.minutes=0;
      this.seconds=0;
      this.millis=0;
      this.interval=0;
  }

  tic()
  {
    let millis=this.millis+1;
    let seconds=this.seconds;
    let minutes=this.minutes;

    if (millis===10)
    {
        millis=0;
        seconds++;
    }

    if (seconds===60)
    {
        seconds=0;
        minutes++;
    }

    this.millis=millis;
    this.seconds=seconds;
    this.minutes=minutes;


      

  }

}
