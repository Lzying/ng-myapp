import { PageComponent } from './page.component';
import { LoginComponent } from './login/login.component';

export const pageRoutes = [
    {path: 'login', component: LoginComponent},
    {
        path: 'page',
        component: PageComponent,
        children: [
            { path: '', redirectTo: 'onepage', pathMatch: 'full' },
            { path: 'onepage', loadChildren: 'page/one-page/one-page.module#OnePageModule' },
            { path: 'user', loadChildren: 'page/user/user.module#UserModule' },
            { path: 'student', loadChildren: 'page/student/student.module#StudentModule' },
            { path: '**', redirectTo: 'onepage' }
        ]
    }
];
