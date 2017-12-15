import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';

import { StudentRoutes } from './student.routes';

@NgModule({
    declarations: [
        StudentComponent
    ],
    imports: [
        RouterModule.forChild(StudentRoutes)
    ],
    providers: [],
})
export class StudentModule { }
