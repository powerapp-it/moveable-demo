import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { UploadComponent } from './upload/upload.component';

import { NgxMoveableModule, NgxMoveableComponent } from 'ngx-moveable';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    UploadComponent,
    // NgxMoveableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMoveableModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
