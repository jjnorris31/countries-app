import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {

  public term: string = "";

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  public handleSubmit() {
    console.log(this.term);
    this.countryService.searchCountry(this.term).subscribe((response) => {
      console.log(response);
    });
  }

}
