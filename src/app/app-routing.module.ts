import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
//import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AdminComponent } from './admin/admin.component';
import { ActorComponent } from './actor/actor.component';
import { Role } from './_ models';
import { AuthGuard } from './_helpers/auth.guard';
import { EditActorComponent } from './actor/edit-actor/edit-actor.component';
import { ViewActorMoviesComponent } from './actor/view-actor-movies/view-actor-movies.component';

const routes: Routes = [
    {
        path: '',
        component: MoviesComponent
    },
    {
        path: 'Admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'Actor/editActor',
        component: EditActorComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    },
    {
        path: 'Actor/viewActorMovies',
        component: ViewActorMoviesComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    },
    
    {
        path: 'Actor',
        component: ActorComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User],
            children: [
                {
                  path:'editActor', component: EditActorComponent
                },
                {
                  path:'viewActorMovies', component: ViewActorMoviesComponent
                }
              ] }
    },
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
