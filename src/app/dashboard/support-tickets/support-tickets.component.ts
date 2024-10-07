import { Component } from '@angular/core';
import { NewTicketComponent } from "../tickets/new-ticket/new-ticket.component";
import { Ticket } from '../tickets/ticket/ticket';

@Component({
  selector: 'support-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  tickets: Ticket[] = []

  onAdd(ticketData: {title: string; text: string}) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    }
    this.tickets.push(ticket)
  }
}
