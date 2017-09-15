import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { DatabaseProvider } from '../providers/database/database';
import { IonicStorageModule } from '@ionic/storage';
import { CommonUtilsProvider } from '../providers/common-utils/common-utils';
import { AppVersion } from '@ionic-native/app-version';
import { CameraServiceProvider } from '../providers/camera-service/camera-service';
//import { Logger } from "angular2-logger/core"; 


export function exportTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
} 

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name:'nvrdb',
      driverOrder: ['sqlite','indexeddb', 'websql']
    }),
    TranslateModule.forRoot({
      loader: {
           provide: TranslateLoader,
           useFactory: (exportTranslateLoader),
           deps: [Http]
         }
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    DatabaseProvider,
    CommonUtilsProvider,
    AppVersion,
    CameraServiceProvider,
    //Logger,


  ]
})
export class AppModule {}