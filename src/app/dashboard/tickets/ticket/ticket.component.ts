import { Component, input, output, signal } from '@angular/core';
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
  dataVisable = signal(false);
  close = output()

  onToggleData() {
    this.dataVisable.update(wasVisble => !wasVisble)
  }

  onMarkAsCompleted() {
    this.close.emit()
  }


}
