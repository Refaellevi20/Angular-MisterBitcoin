import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSignupComponent } from './contact-signup.component';

describe('ContactSignupComponent', () => {
  let component: ContactSignupComponent;
  let fixture: ComponentFixture<ContactSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
