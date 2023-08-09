import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicHtmlComponent } from './dynamic-html/dynamic-html.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './parent-component/child-component/child-component.component';
import { TestComponent } from './test/test.component';
import { RendererComponent } from './renderer/renderer.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicHtmlComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    TestComponent,
    RendererComponent,
    AsyncAwaitComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
