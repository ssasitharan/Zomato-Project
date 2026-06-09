import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'gallery', component: Gallery },
  { path: 'veg', component: Veg },
  { path: 'nonveg', component: Nonveg },
  { path: 'drinks', component: Drinks },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'databinding', component: Databind },
  { path: 'directive', component: Directvedemo },
  { path: 'pipe', component: Pipedemo },
  { path: 'forms', component: Formsdemo },
  { path: 'services', component: Servicedemo },
  { path: 'api-integration', component: Apiint }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }