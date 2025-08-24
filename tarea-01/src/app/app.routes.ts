import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./bienvenida/bienvenida").then((archivo) => archivo.Bienvenida)
    },
    {
        path: 'login',
        loadComponent: () => import("./login/login").then((archivo) => archivo.Login)
    },
    {
        path: 'sobre-mi',
        loadComponent: () => import("./sobre-mi/sobre-mi").then((archivo) => archivo.SobreMi)
    },
    {
        path: 'registro',
        loadComponent: () => import("./registro/registro").then((archivo) => archivo.Registro)
    },
    {
        path: 'error',
        loadComponent: () => import("./error/error").then((archivo) => archivo.Error)
    },
    {
        path: '**',
        loadComponent: () => import("./error/error").then((archivo) => archivo.Error)
    }
];
