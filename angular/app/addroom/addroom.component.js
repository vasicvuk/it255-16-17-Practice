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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var router_1 = require('@angular/router');
var AddRoomComponent = (function () {
    function AddRoomComponent(http, router) {
        var _this = this;
        this.addRoomForm = new forms_1.FormGroup({
            roomname: new forms_1.FormControl(),
            tv: new forms_1.FormControl(),
            beds: new forms_1.FormControl(),
            room_type: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
        var headers = new http_1.Headers();
        this.addRoomForm.setValue({ tv: 1, roomname: "", beds: 1, room_type: "" });
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('token', localStorage.getItem('token'));
        http.get('http://localhost/it255/getroomtypes.php', { headers: headers })
            .map(function (res) { return res.json(); }).share()
            .subscribe(function (data) {
            _this.room_types = data.room_types;
        }, function (err) {
            _this.router.navigate(['./']);
        });
    }
    AddRoomComponent.prototype.onAddRoom = function () {
        var _this = this;
        var data = "roomName=" + this.addRoomForm.value.roomname + "&hasTV=" + this.addRoomForm.value.tv + "&beds=" + this.addRoomForm.value.beds + "&room_type_id=" + this.addRoomForm.value.room_type;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("token", localStorage.getItem("token"));
        this.http.post('http://localhost/it255/addroomservice.php', data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
            if (_this.postResponse["_body"].indexOf("error") === -1) {
                _this.router.navigate(['./allrooms']);
            }
            else {
                alert("Neuspesno dodavanje sobe");
            }
        });
    };
    AddRoomComponent = __decorate([
        core_1.Component({
            selector: 'AddRoomComponent',
            templateUrl: 'app/addroom/addroom.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AddRoomComponent);
    return AddRoomComponent;
}());
exports.AddRoomComponent = AddRoomComponent;
//# sourceMappingURL=addroom.component.js.map