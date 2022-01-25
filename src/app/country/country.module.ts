import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    ByCountryComponent,
    ByCapitalComponent,
    ViewCountryComponent,
    ByRegionComponent
  ],
  exports: [
    ByCountryComponent,
    ByCapitalComponent,
    ViewCountryComponent,
    ByRegionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CountryModule { }
