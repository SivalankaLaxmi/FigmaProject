import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatelist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './updatelist.component.html',
  styleUrl: './updatelist.component.css'
})
export class UpdatelistComponent {

  constructor( private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router) {

  }
  contact: any = {};
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.getContactById(id).subscribe(data => {
      this.contact = data;
    });
  }

  onSubmit() {
    const updatedContact = {
      ...this.contact,
      createdAt: new Date().toISOString(),
      status: true
    };
    this.contactService.updateContact(this.contact.id, updatedContact).subscribe(() => {
      this.router.navigate(['/contactlist']); 
    });
  }
}

