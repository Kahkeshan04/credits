import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CorporateComponent } from './corporate/corporate.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChandruComponent } from './chandru/chandru.component';
import { TodoComponent } from './todo/todo.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { ProductComponent } from './product/product.component';
import { ContactsService } from 'src/services/contacts.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CorporateComponent,
    ContactsComponent,
    ChandruComponent,
    TodoComponent,
    SuccessComponent,
    FailureComponent,
    LoginComponent,
    TaskComponent,
    PagenotfoundComponent,
    AuthorizeComponent,
    ProductComponent,
    ],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    // {provide:LocationStrategy,useClass:HashLocationStrategy}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
