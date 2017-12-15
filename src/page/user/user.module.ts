import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

import { UserRoutes } from './user.routes';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        RouterModule.forChild(UserRoutes)
    ],
    providers: [],
})
export class UserModule { }
