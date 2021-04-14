import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
    @Input() group: FormGroup;

    @Input() name: string;

    @Input() lineIndex: number;

    text: FormControl = new FormControl('');

    constructor() {}

    ngOnInit(): void {
        this.group.setControl('text', this.text);
    }
}
