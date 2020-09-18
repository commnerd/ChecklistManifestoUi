import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './partials/checkbox/checkbox.component';
import { AnchorComponent } from './partials/anchor/anchor.component';
import { IconComponent } from './partials/icon/icon.component';
import { TextComponent } from './partials/text/text.component';
import { LineComponent } from './partials/line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    AnchorComponent,
    IconComponent,
    TextComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
