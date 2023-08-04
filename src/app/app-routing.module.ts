import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './routes/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'authors',
    loadChildren: () =>
      import('./routes/authors/authors.module').then((m) => m.AuthorsModule),
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./routes/books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./routes/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./routes/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./routes/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'prefix',
  },
  {
    path: '404',
    loadChildren: () =>
      import('./routes/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
