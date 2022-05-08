import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      The base is <strong>{{ base }}</strong>
    </h3>
    <button (click)="acc(base)">+ {{ base }}</button>
    <span> {{ counter }} </span>
    <button (click)="acc(-base)">- {{ base }}</button>
  `,
})
export class CounterComponent {
  title: string = 'Counter App';
  counter: number = 0;
  base: number = 5;
  acc(base: number) {
    this.counter += base;
  }
}
