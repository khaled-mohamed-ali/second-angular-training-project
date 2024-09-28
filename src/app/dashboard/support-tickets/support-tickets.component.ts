import { Component } from '@angular/core';
import { NewTicketComponent } from "../tickets/new-ticket/new-ticket.component";

@Component({
  selector: 'support-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {

}
