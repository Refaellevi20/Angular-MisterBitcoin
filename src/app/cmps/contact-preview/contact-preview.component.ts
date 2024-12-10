import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact-preview',
  standalone: false,
  
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss'
})
export class ContactPreviewComponent {
  constructor(private router: Router) {}
  @Input() contact!: Contact
  @Output() deleteContact = new EventEmitter<string>()

  onEditContact() {
    this.router.navigate(['/contact/edit', this.contact._id])
  }  //* unbuild

  onDeleteContact() {
    this.deleteContact.emit(this.contact._id)
  }
}
