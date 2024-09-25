import { Component, input, Input } from '@angular/core';
import { Traffic } from './traffic';

@Component({
  selector: 'traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {

  constructor() {
  }
  @Input() dummyTrafficData : Traffic[] = [];
  // @Input() maxTraffic:any 

  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));

}
