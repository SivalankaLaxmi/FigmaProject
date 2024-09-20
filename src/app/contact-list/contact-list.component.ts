import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {

  contacts: any[] = [];
  constructor( private contactservice: ContactService){}

  ngOnInit(): void {
    this.loadcontent();
  }
  loadcontent() {
    this.contactservice.getContacts().subscribe(data => {
      this.contacts = data;
    })
    console.log(this.contacts);
  }

  deleteContact(id: number) {
    this.contactservice.deleteContact(id).subscribe(() => {
      this.loadcontent(); // Refresh the list after deletion
    });
  }
}
