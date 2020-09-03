import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbMenuModule, NbSidebarModule, NbAccordionModule, NbButtonModule,NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule  } from '@nebular/eva-icons';
import { NbMenuServiceComponent } from './nb-menu-service/nb-menu-service.component';
import { NbSidebarToggleComponent } from './nb-sidebar-toggle/nb-sidebar-toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    NbMenuServiceComponent,
    NbSidebarToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbAccordionModule,
    NbIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
