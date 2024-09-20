import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  private apiUrl = 'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getContactById(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createContact(contact: any): Observable<any> {
    return this.http.post(this.apiUrl, contact);
  }

  updateContact(id: number, contact: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, contact);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
