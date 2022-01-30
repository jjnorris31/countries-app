import { CountryService } from './../../services/country.service';
import { Country } from './../../interfaces/country.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {

  public regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public activeRegion: string = '';
  public countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.searchByRegion(this.activeRegion).subscribe((countries: Country[]) => {
      this.countries = countries;
    }, error => {
      console.log(error);
    });
  }

  public setActiveRegion(region: string) {
    if (region !== this.activeRegion) {
      this.activeRegion = region;
      this.countryService
        .searchByRegion(this.activeRegion)
        .subscribe((countries: Country[]) => {
          this.countries = countries;
        }, error => {
          console.log(error);
      });
    }
  }

}
