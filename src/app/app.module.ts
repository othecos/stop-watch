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
import { Keyboard } from '@ionic-native/keyboard/ngx';
@NgModule({
  declarations: [AppComponent,ExercisesPage],
  entryComponents: [MenuComponent,ExercisesPage],
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
    Keyboard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
