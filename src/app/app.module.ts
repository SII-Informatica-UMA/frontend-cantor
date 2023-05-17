import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CrudBoxComponent } from './components/crud-box/crud-box.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { CreateViewComponent } from './views/create-view/create-view.component';
import { Error404Component } from './views/error404/error404.component';
import { UsersViewComponent } from './views/users-view/users-view.component';
import { UserTargetComponent } from './components/user-target/user-target.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { NewButtonComponent } from './components/new-button/new-button.component';
import { EditUserViewComponent } from './views/edit-user-view/edit-user-view.component';
import { SingleUserViewComponent } from './views/single-user-view/single-user-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrudBoxComponent,
    HomeViewComponent,
    CreateViewComponent,
    Error404Component,
    UserTargetComponent,
    UsersViewComponent,
    UserNavbarComponent,
    NewButtonComponent,
    EditUserViewComponent,
    SingleUserViewComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginViewComponent },
      { path: 'home', component: HomeViewComponent },
      { path: 'users', component: UsersViewComponent },
      { path: 'headquarters', component: UsersViewComponent },
      { path: 'users/create', component: CreateViewComponent },
      { path: 'users/edit/:idUser', component: EditUserViewComponent },
      { path: 'users/:idUser', component: SingleUserViewComponent },
      { path: '**', component: Error404Component }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
