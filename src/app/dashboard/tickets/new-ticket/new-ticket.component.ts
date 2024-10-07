<<<<<<< HEAD
import { Component, output } from '@angular/core';
=======
import { afterNextRender, afterRender, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
>>>>>>> 23d843cdd734449be46721d7d415a969a81d3788
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
<<<<<<< HEAD
  add = output<{title: string ; text: string}>()
=======

>>>>>>> 23d843cdd734449be46721d7d415a969a81d3788


onSubmit(title:string, textArea: string, form: HTMLFormElement) {
  this.add.emit({title:title,text: textArea})
}
 
}
