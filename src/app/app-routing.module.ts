import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
//import { HomeComponent } from './home';
//import { AdminComponent } from './admin';
import { LoginComponent } from './login';
//import { AuthGuard } from './_helpers';
//import { Role } from './_models';

const routes: Routes = [
    {
        path: '',
        component: MoviesComponent
    },
    // {
    //     path: 'admin',
    //     component: AdminComponent,
    //     canActivate: [AuthGuard],
    //     data: { roles: [Role.Admin] }
    // },
    {
        path: 'Login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
