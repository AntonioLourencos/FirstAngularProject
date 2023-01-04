import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent implements OnInit {
  public countries!: {
    name: string;
    flag: string;
    independent: boolean;
    region: string;
  }[];

  ngOnInit(): void {
    this.apiService.GetAllCountries().subscribe((data) => {
      this.countries = data;
    });
  }

  constructor(private apiService: ApiService) {}
}
