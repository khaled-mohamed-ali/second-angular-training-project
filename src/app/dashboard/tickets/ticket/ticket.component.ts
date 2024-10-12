import { Component, input, signal } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  dataVisable = signal(false)

  onToggleData() {
    this.dataVisable.update(wasVisble => !wasVisble)
  }


}
