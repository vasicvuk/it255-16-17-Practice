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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var router_1 = require('@angular/router');
var AllRoomTypesComponent = (function () {
    function AllRoomTypesComponent(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('token', localStorage.getItem('token'));
        http.get('http://localhost/it255/getroomtypes.php', { headers: headers })
            .map(function (res) { return res.json(); }).share()
            .subscribe(function (data) {
            _this.data = data.room_types;
        }, function (err) {
            _this.router.navigate(['./']);
        });
    }
    AllRoomTypesComponent.prototype.removeRoomType = function (event, item) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('token', localStorage.getItem('token'));
        this.http.get('http://localhost/it255/deleteroomtype.php?id=' + item, { headers: headers }).subscribe(function (data) {
            event.srcElement.parentElement.parentElement.remove();
        });
    };
    AllRoomTypesComponent = __decorate([
        core_1.Component({
            selector: 'AllRoomTypesComponent',
            templateUrl: 'app/allroomtypes/allroomtypes.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AllRoomTypesComponent);
    return AllRoomTypesComponent;
}());
exports.AllRoomTypesComponent = AllRoomTypesComponent;
//# sourceMappingURL=allroomtypes.component.js.map