import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  standalone: false,
  
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {
  // @Input() Contact: Contact[] | null = null
  //* or like that ⬆️
  @Input() contacts!: Contact[] | null
  @Output() deleteContact = new EventEmitter<string>()
}
