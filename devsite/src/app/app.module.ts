import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { DebugComponent } from './debug/debug.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { OnScreenTerminalComponent } from './onscreenTerminal/onscreenTerminal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    DebugComponent,
    NavigationBarComponent,
    OnScreenTerminalComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
