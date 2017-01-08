"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
var home_component_1 = require('./home/home.component');
var aboutus_component_1 = require('./aboutus/aboutus.component');
var register_component_1 = require('./register/register.component');
var login_component_1 = require('./login/login.component');
var addroom_component_1 = require('./addroom/addroom.component');
var allrooms_component_1 = require('./allrooms/allrooms.component');
var room_component_1 = require('./room/room.component');
var search_1 = require('./pipes/search');
var allroomtypes_component_1 = require('./allroomtypes/allroomtypes.component');
var addroomtype_component_1 = require('./addroomtype/addroomtype.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routing, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomePageComponent, aboutus_component_1.AboutUsComponent, register_component_1.RegisterComponent, addroom_component_1.AddRoomComponent, allrooms_component_1.AllRoomsComponent, allroomtypes_component_1.AllRoomTypesComponent, addroomtype_component_1.AddRoomTypeComponent, room_component_1.RoomComponent, login_component_1.LoginComponent, search_1.SearchPipe],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map