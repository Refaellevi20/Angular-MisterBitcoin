import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { lastValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'contact-edit',
  standalone: false,

  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.scss'
})
export class ContactEditComponent implements OnInit, OnDestroy {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  contact!: Contact
  subscription!: Subscription
  isMobile: boolean = false

  ngOnInit() {
    this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact = contact || new Contact()
    })
    this.isMobile = window.innerWidth <= 768
  }

  async onAddContact() {
    try {
      await lastValueFrom(this.contactService.saveContact(this.contact))
      this.router.navigateByUrl('/contact')
    } catch (err) {
      console.log('err:', err);
      this.router.navigateByUrl('/contact')
      //! שימוש: מנווט ישירות ל-URL שניתן לו, ומתייחס אליו כאל נתיב מוחלט.
    }
  }

  onCancel() {
    this.router.navigateByUrl('/contact')
  }

  onCloseModal(event: MouseEvent) {
    console.log('Modal overlay clicked')
    this.router.navigateByUrl('/contact')
    console.log('contact', this.router.navigateByUrl('/contact'))

  }

  onGlobalClick() {
    console.log('Global click detected')
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
