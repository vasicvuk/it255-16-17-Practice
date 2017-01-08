import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent }  from './home/home.component';
import { AboutUsComponent }    from './aboutus/aboutus.component';
import { RegisterComponent }    from './register/register.component';
import { AddRoomComponent }    from './addroom/addroom.component';
import { LoginComponent }    from './login/login.component';
import { AllRoomsComponent }    from './allrooms/allrooms.component';
import { RoomComponent }    from './room/room.component';
import { AllRoomTypesComponent } from './allroomtypes/allroomtypes.component';
import { AddRoomTypeComponent } from './addroomtype/addroomtype.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'allrooms', component: AllRoomsComponent},
  { path: 'addroom', component: AddRoomComponent},
  { path: 'addroomtype', component: AddRoomTypeComponent},
  { path: 'allroomtypes', component: AllRoomTypesComponent},
  { path: 'room/:id', component: RoomComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
