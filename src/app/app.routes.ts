import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { UserSelectionPage } from './user-selection-page/user-selection-page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
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
