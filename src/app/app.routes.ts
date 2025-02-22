import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const appRoutes = [
    {path: "", component: AppComponent, pathMatch: "full"},
    {path: "login", component: LoginComponent, pathMatch: "full"},
    {path: "register", component: RegistroComponent, pathMatch: "full"},
];

export const routes: Routes = [];
