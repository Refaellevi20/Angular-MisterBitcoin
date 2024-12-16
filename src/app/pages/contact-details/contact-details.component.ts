import { Component, OnDestroy, OnInit } from '@angular/core'
import { Contact } from '../../models/contact.model'
import { Subscription } from 'rxjs'
import { User } from '../../models/user.model'
import { Router } from '@angular/router'
import { UserService } from '../../../services/user.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'contact-details',
  standalone: false,
  
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
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

  onGoBack(): void {
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
