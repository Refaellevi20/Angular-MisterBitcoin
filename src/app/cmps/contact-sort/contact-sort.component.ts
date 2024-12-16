import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-sort',
  standalone: false,
  
  templateUrl: './contact-sort.component.html',
  styleUrl: './contact-sort.component.scss'
})
export class ContactSortComponent {
  @Input() contacts: Contact[] = [];
  @Output() sortedContacts = new EventEmitter<Contact[]>()

  sortContacts(): void {
    const sorted = this._sort(this.contacts)
    this.sortedContacts.emit(sorted)
  }

  private _sort(contacts: Contact[]): Contact[] {
    return contacts.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1
      }
      return 0
    })
  }
  
}
