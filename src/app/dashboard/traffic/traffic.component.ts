import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Traffic } from './traffic';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'traffic',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
})
export class TrafficComponent {

  constructor() {
  }

  @Input() dummyTrafficData! :Traffic[] ;
  @Input() maxTraffic: number = 0;


}
