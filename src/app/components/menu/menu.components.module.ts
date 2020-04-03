import { NgModule } from "@angular/core";
import {MenuComponent} from './menu.component'
import { MenuListComponent} from './list/list.component'
import {MenuItemComponent} from './list/item/item.component'
import {MenuItemSkeletonComponent} from './list/item-skeleton/item-skeleton.component'
import {MenuItemUpdateComponent} from './list/item-update/item-update.component'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations: [
        MenuComponent,
        MenuListComponent,
        MenuItemComponent,
        MenuItemSkeletonComponent,
        MenuItemUpdateComponent,
    ],
    exports: [
        MenuComponent,
        MenuListComponent,
        MenuItemComponent,
        MenuItemSkeletonComponent,
        MenuItemUpdateComponent,
    ]
})
export class MenuComponentsModule { }
