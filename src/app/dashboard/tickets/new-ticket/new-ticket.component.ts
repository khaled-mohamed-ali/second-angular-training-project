import { Component, output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
// import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  add = output<{title: string ; text: string}>()


onSubmit(title:string, textArea: string, form: HTMLFormElement) {
  this.add.emit({title:title,text: textArea})
}
 
}
