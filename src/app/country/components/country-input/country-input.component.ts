import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  public term: string = "";

  // subject is an observable that allows to be multicasted to many Observers
  public debounced: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debounced
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onEnter.emit(this.term);
    })
  }

  public handleSubmit() {
    this.onEnter.emit(this.term);
  }

  public keyPressed() {
    this.debounced.next(this.term)
  }

}
