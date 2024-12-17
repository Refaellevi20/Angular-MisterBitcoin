import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { Contact } from '../../models/contact.model'
import { finalize, Subscription } from 'rxjs'
import { User } from '../../models/user.model'
import { Router } from '@angular/router'
import { UserService } from '../../../services/user.service'
import { ActivatedRoute } from '@angular/router'
import { ContactService } from '../../../services/contact.service'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'contact-details',
  standalone: false,
  
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  @Output() deleteContact = new EventEmitter<string>()
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private contactService: ContactService
  ) {}  //^ ot inject

  contact!: Contact
  subscription!: Subscription
  user!: User | null

  async ngOnInit() {
    this.subscription = this.route.data.subscribe((data) => {
      this.contact = data['contact']
    })
    try {
      await this.userService.getLoggedInUser()
      this.subscription = this.userService.loggedInUser$.subscribe((user) => {
        this.user = user
      })
    } catch (err) {
      console.log('err:', err)
    }
  }

  onDeleteContact(contactId: string) {
    this.contactService
      .deleteContact(contactId)
      .pipe(
        finalize(() => {
          this.router.navigate(['/contact'])
        })
      )
      .subscribe({
        next: () => console.log('Contact deleted'),
        error: (err) => console.log('Error:', err),
      })
  }
  
  onGoBack(): void {
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
