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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DragDropModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule { }
