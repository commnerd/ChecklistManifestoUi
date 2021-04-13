// Angular libraries
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 3rd Party Libraries
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Project libraries
import { CheckboxComponent } from './partials/checkbox/checkbox.component';
import { AnchorComponent } from './partials/anchor/anchor.component';
import { IconComponent } from './partials/icon/icon.component';
import { TextComponent } from './partials/text/text.component';
import { LineComponent } from './partials/line/line.component';
import { AppComponent } from './app.component';

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
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
