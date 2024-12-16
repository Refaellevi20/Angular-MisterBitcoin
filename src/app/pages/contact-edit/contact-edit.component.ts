import { Component, inject } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { lastValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'contact-edit',
  standalone: false,
  
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.scss'
})
export class ContactEditComponent {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  contact!: Contact;
  subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact = contact || new Contact()
    })
  }

  async onAddContact() {
    try {
      await lastValueFrom(this.contactService.saveContact(this.contact))
      this.router.navigateByUrl('/contact')
    } catch (err) {
      console.log('err:', err);
      this.router.navigateByUrl('/contact')
    }
  }

  onCancel() {
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
