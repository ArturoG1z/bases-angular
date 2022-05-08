import { Component } from "@angular/core";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html"
})
export class HeroComponent {
  name: string = "ironman";
  age: number = 45;
  getName(): string {
    return `${this.name} is ${this.age} years old`;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  changeName(name: string): void {
    this.name = name;
  }

  changeAge(age: number): void {
    this.age = age;
  }
}