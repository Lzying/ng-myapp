import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { OnePageComponent } from './one-page.component';


import { onePageRouters } from './one-page.routes';

@NgModule({
    declarations: [
        OnePageComponent
    ],
    imports: [
        RouterModule.forChild(onePageRouters),
        CarouselModule.forRoot()
    ],
    providers: [],
})
export class OnePageModule { }
