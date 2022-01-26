import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "../interfaces/country.interface";

@Injectable({
    providedIn: 'root'
})
export class CapitalService {
    private url: string = "https://restcountries.com/v3.1"

    constructor(private httpClient: HttpClient) {

    }

    public searchCapital(capitalName: string): Observable<Country[]> {
        const url = `${this.url}/capital/${capitalName}`
        return this.httpClient.get<Country[]>(url);
    }

}