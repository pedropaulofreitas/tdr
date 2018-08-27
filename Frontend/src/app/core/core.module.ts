import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HttpService } from './http.service';
import { AuthService } from './auth.service';
import { PrivateRoute } from './private-route';

import { NavbarComponent } from './navbar/navbar.component';
import { MessageHandlerComponent } from './message-handler.component';

@NgModule ({
  declarations: [
      NavbarComponent,
      MessageHandlerComponent
    ],
  imports: [
      RouterModule,
      CommonModule
    ],
  providers: [
      HttpService,
      AuthService,
      PrivateRoute
    ],
  exports: [
      NavbarComponent,
      MessageHandlerComponent
    ]
})
export class CoreModule {

}
