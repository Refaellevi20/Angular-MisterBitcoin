import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'contact-signup',
  standalone: false,
  
  templateUrl: './contact-signup.component.html',
  styleUrl: './contact-signup.component.scss'
})
export class SignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  userFullName!: string;
  returnUrl: string = '/';

  ngOnInit(): void {
    // Retrieve the returnUrl parameter from the query string
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSignUp() {
    this.userService.signup(this.userFullName)
    this.router.navigateByUrl(this.returnUrl)
  }
}
