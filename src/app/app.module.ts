import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//firebase

import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http' 
  import { from } from 'rxjs';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            HttpClientModule,
            PipesModule,
            AngularFireModule.initializeApp(firebaseConfig, 'agus'), // imports firebase/app needed for everything
            AngularFireDatabaseModule, // imports firebase/database, only needed for database features
            AngularFireAuthModule, // imports firebase/auth, only needed for auth features
          ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
