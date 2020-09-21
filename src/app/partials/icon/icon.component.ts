// Angular libraries
import { Component, OnInit } from '@angular/core';

// 3rd party libraries
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  faCoffee = faCoffee

  constructor() { }

  ngOnInit(): void {
  }

}
