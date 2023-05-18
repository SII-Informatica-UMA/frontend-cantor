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
import { AuthGuard } from './auth.guard';
import { Auth2Guard } from './auth2.guard';
import { GuardsViewComponent } from './views/guards-view/guards-view.component';
import { CreateGuardViewComponent } from './create-guard-view/create-guard-view.component';


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
    LoginViewComponent,
    GuardsViewComponent,
    CreateGuardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginViewComponent, canActivate: [Auth2Guard] },
      { path: 'home', component: HomeViewComponent, canActivate: [AuthGuard] },
      { path: 'users', component: UsersViewComponent, canActivate: [AuthGuard] },
      { path: 'users/create', component: CreateViewComponent, canActivate: [AuthGuard] },
      { path: 'users/edit/:idUser', component: EditUserViewComponent, canActivate: [AuthGuard] },
      { path: 'users/:idUser', component: SingleUserViewComponent, canActivate: [AuthGuard] },
      { path: 'vigilantes', component: GuardsViewComponent, canActivate: [AuthGuard] },
      { path: '**', component: Error404Component }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
