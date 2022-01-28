import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/country.interface';
import { switchMap } from 'rxjs/operators';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {

  public country!: Country;

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    // this.activatedRoute.params.pipe(
    //   switchMap((param) => this.countryService.searchCountryByCode(param.id))
    // ).subscribe(resp => {
    //   console.log(resp);
    // });

    this.activatedRoute.params.subscribe(params => {
      this.countryService.searchCountryByCode(params.id).subscribe(country => {
        this.country = country[0];
        console.log(this.country);
        
      });
    })
  }

}
