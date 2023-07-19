import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BurgerButtonModule } from './components/UI/burger-button/burger-button.module';
import { NgOptimizedImage } from '@angular/common';
import { SidenavModule } from './components/UI/sidenav/sidenav.module';
import { NavItemModule } from './components/UI/nav-item/nav-item.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BurgerButtonModule,
    NgOptimizedImage,
    SidenavModule,
    NavItemModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
