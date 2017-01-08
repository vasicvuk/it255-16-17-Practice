"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var aboutus_component_1 = require('./aboutus/aboutus.component');
var register_component_1 = require('./register/register.component');
var addroom_component_1 = require('./addroom/addroom.component');
var login_component_1 = require('./login/login.component');
var allrooms_component_1 = require('./allrooms/allrooms.component');
var room_component_1 = require('./room/room.component');
var allroomtypes_component_1 = require('./allroomtypes/allroomtypes.component');
var addroomtype_component_1 = require('./addroomtype/addroomtype.component');
var appRoutes = [
    { path: '', component: home_component_1.HomePageComponent },
    { path: 'aboutus', component: aboutus_component_1.AboutUsComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'allrooms', component: allrooms_component_1.AllRoomsComponent },
    { path: 'addroom', component: addroom_component_1.AddRoomComponent },
    { path: 'addroomtype', component: addroomtype_component_1.AddRoomTypeComponent },
    { path: 'allroomtypes', component: allroomtypes_component_1.AllRoomTypesComponent },
    { path: 'room/:id', component: room_component_1.RoomComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map