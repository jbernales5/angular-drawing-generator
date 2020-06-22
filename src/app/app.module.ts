import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CanvasWhiteboardModule } from 'ng2-canvas-whiteboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanvasWhiteboardModule
  ],
  providers: [CanvasWhiteboardModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
