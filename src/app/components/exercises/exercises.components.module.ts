import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ExerciseListComponent } from './list/list.component';
import { ExerciseItemComponent } from './item/item.component';
import { ExerciseItemSkeletonComponent } from './item-skeleton/item-skeleton.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations: [
        ExerciseListComponent,
        ExerciseItemComponent,
        ExerciseItemSkeletonComponent
    ],
    exports: [
        ExerciseListComponent,
        ExerciseItemComponent,
        ExerciseItemSkeletonComponent
    ]
})
export class ExercisesComponentsModule {

}
