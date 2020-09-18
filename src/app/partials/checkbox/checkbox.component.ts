import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

    @Input() type : string = "checkbox";

    @Input() checked : boolean = false;

    @Input() slug : string;

    @Output() changeChecked : EventEmitter<boolean> = new EventEmitter(false);

    constructor() { }

    ngOnInit(): void {
    }

}
