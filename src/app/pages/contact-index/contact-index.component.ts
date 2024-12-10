import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Observable } from 'rxjs';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-index',
  standalone: false,
  
  templateUrl: './contact-index.component.html',
  styleUrl: './contact-index.component.scss'
})
export class ContactIndexComponent implements OnInit {
  constructor(private contactService: ContactService) {}
//* or 
  // private petService = inject(PetService)
  //   private destroyRef = inject(DestroyRef)

  contacts!: Contact[]
  contacts$!: Observable<Contact[]>

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
  }

  async onDeleteContact(contactId: string) {
    try {
      await this.contactService.deleteContact(contactId)
    } catch (err) {
      console.log('err:', err)
    }
  }
}