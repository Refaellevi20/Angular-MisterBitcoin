import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Router } from 'express';

@Component({
  selector: 'app-contact-preview',
  standalone: false,
  
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss'
})
export class ContactPreviewComponent {

  @Input() contact!: Contact
  @Output() deleteContact = new EventEmitter<string>()

  onDeleteContact() {
    this.deleteContact.emit(this.contact._id)
  }
}
