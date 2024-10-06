import { afterNextRender, afterRender, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {


onSubmit(HTMLLabelElement: ButtonComponent, textArea: HTMLTextAreaElement ,form: HTMLFormElement) {
  
  form.reset()
}
 
}
