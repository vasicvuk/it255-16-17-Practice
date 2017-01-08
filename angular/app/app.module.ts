import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { routing }  from './app.routing';

import { HomePageComponent }  from './home/home.component';
import { AboutUsComponent }    from './aboutus/aboutus.component';
import { RegisterComponent }    from './register/register.component';
import { LoginComponent }    from './login/login.component';
import { AddRoomComponent }    from './addroom/addroom.component';
import { AllRoomsComponent }    from './allrooms/allrooms.component';
import { RoomComponent }    from './room/room.component';

import { SearchPipe } from './pipes/search'

import { AllRoomTypesComponent } from './allroomtypes/allroomtypes.component';
import { AddRoomTypeComponent } from './addroomtype/addroomtype.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing, FormsModule, ReactiveFormsModule  ],
  declarations: [ AppComponent, HomePageComponent, AboutUsComponent, RegisterComponent, AddRoomComponent, AllRoomsComponent, AllRoomTypesComponent, AddRoomTypeComponent, RoomComponent, LoginComponent, SearchPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
