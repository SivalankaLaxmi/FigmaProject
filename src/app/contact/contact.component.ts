import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import {FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private contactService: ContactService, private router: Router) {}

//   onSubmit(form: NgForm) {
//     console.log('Your form data : ', form.value);
// }
  
  onSubmit(form: NgForm) {
    const contactData = {
      createdAt: new Date().toISOString(),
      ...form.value,
      status: true
    };
    this.contactService.createContact(contactData).subscribe(response => {
      console.log('Contact created!', response);
    });

    this.router.navigate(['/contactlist']);
  }
}
