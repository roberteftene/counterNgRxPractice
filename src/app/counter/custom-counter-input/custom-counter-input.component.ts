import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.actions';
import { getUserName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  userName: string;
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select(getUserName).subscribe((userName: string) => {
      this.userName = userName;
    });
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }
}
