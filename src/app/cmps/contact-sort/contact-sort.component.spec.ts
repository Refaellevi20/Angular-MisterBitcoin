import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSortComponent } from './contact-sort.component';

describe('ContactSortComponent', () => {
  let component: ContactSortComponent;
  let fixture: ComponentFixture<ContactSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactSortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
