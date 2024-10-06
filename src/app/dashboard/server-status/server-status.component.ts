import { Component, Input, signal, OnInit } from '@angular/core';

@Component({
  selector: 'server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent   {

  currentStatus = signal<'online' | 'offline' |'unknown'>('online');

  constructor() {
  }
    ngOnInit() {
  setInterval(() => {
    const interval = Math.random();

    if( interval < 0.5 ) {
      this.currentStatus.set('online')
    }
    else if (interval < 0.9) {
      this.currentStatus.set('offline')
    }
    else{ this.currentStatus.set('unknown')}
  },5000)
}



}


function ngOnInit() {
  throw new Error('Function not implemented.');
}

