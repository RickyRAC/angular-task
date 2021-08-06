import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
//import { UserProfile } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  apiUrl = 'https://randomuser.me/api/'
  
  constructor(private http: HttpClient) { }

  getRandomUser() {
    return this.http.get(`${this.apiUrl}`)
  }
}
