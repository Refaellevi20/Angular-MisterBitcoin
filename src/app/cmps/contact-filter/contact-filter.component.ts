import { Component, DestroyRef, inject } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ContactFilter } from '../../models/contact.model';
import { ContactService } from '../../../services/contact.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-contact-filter',
  standalone: false,
  
  templateUrl: './contact-filter.component.html',
  styleUrl: './contact-filter.component.scss'
})
export class ContactFilterComponent {
  private contactService = inject(ContactService)
  private filterBySubject$ = new Subject()
  contactFilter!: ContactFilter
  destroyRef = inject(DestroyRef)



  ngOnInit(): void {
      this.contactService.contactFilter$
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe(contactFilter => this.contactFilter = contactFilter)

      this.filterBySubject$
          .pipe(
              debounceTime(300),
              distinctUntilChanged(),
              takeUntilDestroyed(this.destroyRef)
          )
          .subscribe(() => {
              console.log('FILTER!!')
              this.contactService.setFilter(this.contactFilter)
          })

  }

  onSetFilter() {
    this.contactService.setFilter({ ...this.contactFilter })
  }
}
