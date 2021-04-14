import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

    checked : FormControl = new FormControl(false);

    @Input() group: FormGroup

    @Input() name: string;

    @Input() lineIndex: number;

    constructor() { }

    ngOnInit(): void {
      this.group.setControl('checked', this.checked);
    }
}
