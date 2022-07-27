import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers(page = 1) {
    return this.httpClient.get(
      `https://www.mecallapi.com/api/users?page=${page}&per_page=5`
    );
  }
}
