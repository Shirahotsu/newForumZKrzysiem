import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NewestPostsComponent } from './newest-posts/newest-posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddPostComponent } from './add-post/add-post.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SandboxComponent } from './sandbox/sandbox.component';



const routes: Routes = [
  {
    path: '',
    component: NewestPostsComponent
  },
  {
  path: 'najnowsze',
  component: NewestPostsComponent
  },
  {
    path: 'kategorie',
    component: CategoriesComponent
  },
  {
    path: 'nowyPost',
    component: AddPostComponent
  },
  {
    path: 'logowanie',
    component: LoginFormComponent
  },
  {
    path: 'rejestracja',
    component: RegisterFormComponent
  },
  {
    path: 'hui',
    component: SandboxComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewestPostsComponent,
    CategoriesComponent,
    AddPostComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
