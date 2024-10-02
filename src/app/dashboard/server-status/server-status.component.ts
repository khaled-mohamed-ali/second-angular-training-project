import { Component, Input } from '@angular/core';

@Component({
  selector: 'server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {

  currentStatus: string = 'online';

  constructor() {




}
}
