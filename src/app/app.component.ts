import { Component, Input, OnInit, OnDestroy, Output, Injector } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { createCustomElement } from '@angular/elements';
import { FormArray, FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @Input('name') public name: string = "checklist"

  @Input('value')
  set value(input: string) {
    this.list.setValue(JSON.parse(input));
  }
  get value(): string {
    return JSON.stringify(this.list.value);
  }

  @Output('value') valueEmitter = new EventEmitter();

  @Input() list: FormArray = new FormArray([])
  private subscription: Subscription;

<<<<<<< HEAD
  constructor() {

=======
  constructor(injector: Injector) {
    // Convert `AppComponent` to a custom element.
    const ChecklistElement = createCustomElement(AppComponent, {injector});

    // Register the custom element with the browser.
    customElements.define('my-checklist', ChecklistElement);
>>>>>>> 9279081 (Added drag/drop feature to component)
  }

  ngOnInit(): void {
    this.subscription = this.list.valueChanges.subscribe((valueList: Array<object>) => {
      let list = this.list;
      this.valueEmitter.emit(list.value);
      let lastValue = list.at(list.length - 1)?.get("text")?.value;
      lastValue = lastValue == undefined ? "" : lastValue;
      if(valueList.length <= 0 || lastValue !== "") {
        this.addLine();
      }
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

  public drop(event: CdkDragDrop<FormArray>): void {
    let list = this.list.value;
    if(event.previousIndex != list.length - 1) {
      moveItemInArray(list, event.previousIndex, event.currentIndex);
    }
    this.list.setValue(list);
  }
}
