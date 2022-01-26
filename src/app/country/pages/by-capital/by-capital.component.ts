import { CapitalService } from './../../services/capital.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {

  public hasError: boolean = false;
  public countries: Country[] = [];

  constructor(private capitalService: CapitalService) { }

  ngOnInit(): void {
  }

  private setHasError(error: boolean) {
    this.hasError = error;
  } 

  public handleSubmit(event: any) {
    this.setHasError(false);
    this.capitalService.searchCapital(event).subscribe((response: Country[]) => {
      this.countries = response;
    }, (error) => {
      this.setHasError(true);
    });
  }

}
