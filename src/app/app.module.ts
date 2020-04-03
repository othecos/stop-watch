import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { MenuComponent } from './components/menu/menu.component';
import { ExercisesPage } from './modals/exercises/exercises.page';
import { ReactiveFormsModule } from '@angular/forms';
import { TimerPage } from './modals/timer/timer.page';
import { VolumeComponent } from './popovers/volume/volume.component';
@NgModule({
  declarations: [AppComponent,ExercisesPage,TimerPage],
  entryComponents: [MenuComponent,ExercisesPage,TimerPage,VolumeComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}