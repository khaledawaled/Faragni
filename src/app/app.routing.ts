import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component'
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';

import { FollowersComponent } from './components/followers/followers.component';
import { ProfileComponent } from './components/profile/profile.component'
import { ActivityComponent } from './components/activity/activity.component'

import { AuthGuard } from './guards/auth-guard/auth-guard.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },//, canActivate: [AuthGuard] }
    { path: 'login', component: LoginComponent },
    { path: 'welcome', component: WelcomeScreenComponent, canActivate: [AuthGuard] },
    { path: 'movies', component: WelcomeScreenComponent, canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent },
    { path: 'profile' , component: ProfileComponent },
    { path: 'followers' , component: FollowersComponent}
    

    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];