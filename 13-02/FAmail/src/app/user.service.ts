import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  us: string;
  constructor() { }
  setUser(user) {
    this.us = user;
  }
}
