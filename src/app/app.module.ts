import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './profile/info/info.component';
import { ContactComponent } from './profile/contact/contact.component';
import { FormComponent } from './profile/contact/form/form.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductViewComponent } from './products/product-view/product-view.component';

@NgModule({
  declarations: [ //Components, Directives, Pipes
    AppComponent,
    ProfileComponent,
    InfoComponent,
    ContactComponent,
    FormComponent,
    ProductsComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductViewComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [], //Services - Singletons (Dependency Injection)
  bootstrap: [AppComponent] //Root Component - AppComponent
})
export class AppModule { }