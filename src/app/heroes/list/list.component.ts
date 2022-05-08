import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
  deletedHeroes: string[] = [];
  lastDeletedHero: string = '';
  constructor() {
    console.log('constructor');
    this.deletedHeroes = [];
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  @Confirm('Are you sure you want to delete this hero?')
  deleteHero(index: number) {
    console.log('deleteHero', this.heroes[index]);
    this.lastDeletedHero = this.heroes[index];
    this.deletedHeroes = [...this.heroes.splice(index, 1), ...this.deletedHeroes];
  }
}

function Confirm(message: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (confirm(message)) {
        return originalMethod.apply(this, args);
      } else {
        return;
      }
    }
    return descriptor;
  }
}