import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { UserSelectionPage } from './user-selection-page/user-selection-page';
import { HomePage } from './homepage/homepage';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: 'Home',
    },
    {
        path: 'login',
        component: LoginPage,
        title: 'Login',
    },
    {
        path: 'userselection/:accountid',
        component: UserSelectionPage,
        title: 'User Selection',
    }
];
