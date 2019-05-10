import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule, InMemoryBackendConfig, InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { DataService } from './core/_service';
import { HomeComponent } from './shared/components/home/home.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
    environment.production ? [] :
    InMemoryWebApiModule.forRoot(DataService, {
      delay: 500,
      passThruUnknownUrl: true,
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
