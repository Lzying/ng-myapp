import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 路由模块。导进来就可以识别项目里面的所有路由路径，
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { LoginComponent } from './login.component';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AlertModule.forRoot(),
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot()
    ],
    providers: [],
})
export class LoginModule { }
