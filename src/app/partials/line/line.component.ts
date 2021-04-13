import { FormGroup, FormArray } from '@angular/forms';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit, OnDestroy {
  @Input() group: FormGroup;

  @Input() index: number;

  @Input() removeLine: Function;

  private subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.group.valueChanges.subscribe(() => {
      if((this.group?.get("text")?.value as string) === "") {
        this.removeLine(this.index);
      } 
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
