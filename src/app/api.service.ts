import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private path: string;

  constructor(private httpClient: HttpClient) {
    this.path = 'https://restcountries.com/v2/';
  }

  GetAllCountries(): Observable<any> {
    return this.httpClient.get<any>(this.path + 'all');
  }
}
