// Angular libraries
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// 3rd party libraries
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() group: FormGroup
  
  icons: IconDefinition[] = [
    null,
    faExclamation,
  ];

  icon = new FormControl(0)

  constructor() { }

  ngOnInit(): void {
    this.group.setControl('icon', this.icon);
  }

  incIndex(): void {
    this.icon.setValue((this.icon.value + 1) % this.icons.length)
  }

}
