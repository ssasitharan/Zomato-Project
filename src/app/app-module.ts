import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Landing } from './landing/landing';
import { About } from './about/about';
import { Gallery } from './gallery/gallery';
import { Veg } from './veg/veg';
import { Nonveg } from './nonveg/nonveg';
import { Drinks } from './drinks/drinks';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Databind } from './databind/databind';
import { Directvedemo } from './directvedemo/directvedemo';
import { Pipedemo } from './pipedemo/pipedemo';
import { Formsdemo } from './formsdemo/formsdemo';
import { Servicedemo } from './servicedemo/servicedemo';
import { Apiint } from './apiint/apiint';

@NgModule({
  declarations: [
    App,
    Home,
    Landing,
    About,
    Gallery,
    Veg,
    Nonveg,
    Drinks,
    Login,
    Signup,
    Databind,
    Directvedemo,
    Pipedemo,
    Formsdemo,
    Servicedemo,
    Apiint,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
