import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

@NgModule(
  {
    declarations: [
      CounterComponent
    ],
    imports: [],
    exports: [
      CounterComponent
    ],
    providers: [],
    bootstrap: []
  }
)
export class CounterModule { }
