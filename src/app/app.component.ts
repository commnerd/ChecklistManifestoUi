import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { LineComponent } from './partials/line/line.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @Input() list: FormArray = new FormArray([])

  private subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.list.valueChanges.subscribe((valueList: Array<object>) => {
      let list = this.list;
      let lastValue = list.at(list.length - 1)?.get("text")?.value;
      lastValue = lastValue == undefined ? "" : lastValue;
      if(valueList.length <= 0 || lastValue !== "") {
        this.addLine();
      }
      console.log(this.list.value);
    });
    this.addLine();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private addLine(): void {
    this.list.push(new FormGroup({}));
  }

  public removeLine(index: number): void {
    if(index != this.list.length - 1) {
      this.list.removeAt(index);
    }
  }
}
