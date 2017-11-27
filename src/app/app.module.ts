import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UserService } from './login/user.service';
import { BoardsService } from './boards/boards.service';
import { NavbarService } from './navbar/navbar.service';

import { ScrumHomeComponent } from './scrum-home/scrum-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { TaskComponent } from './task/task.component';
import { HomeComponent } from './home/home.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'scrum-home', component: ScrumHomeComponent},
  { path: 'user-home', component: UserHomeComponent},
  { path: 'boards', component: BoardsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ScrumHomeComponent,
    UserHomeComponent,
    TaskComponent,
    HomeComponent,
    BoardsComponent,
    BoardDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DatePipe, UserService, BoardsService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
