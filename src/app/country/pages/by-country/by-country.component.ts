import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {

  public hasError: boolean = false;
  public countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  private setHasError(error: boolean) {
    this.hasError = error;
  } 

  public handleSubmit(event: any) {
    this.setHasError(false);
    this.countryService.searchCountry(event).subscribe((response: Country[]) => {
      this.countries = response;
    }, (error) => {
      this.setHasError(true);
    });
  }

}
