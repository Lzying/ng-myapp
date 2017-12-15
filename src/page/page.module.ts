import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pageRoutes } from './page.routes';
import { PageComponent } from './page.component';
import { LoginModule } from './login/login.module';

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        LoginModule,
        RouterModule.forChild(pageRoutes)
    ],
    providers: [],
})
export class PageModule { }
