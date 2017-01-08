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
var AddRoomTypeComponent = (function () {
    function AddRoomTypeComponent(http, router) {
        this.addRoomTypeForm = new forms_1.FormGroup({
            name: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
    }
    AddRoomTypeComponent.prototype.onAddRoomType = function () {
        var _this = this;
        var data = "name=" + this.addRoomTypeForm.value.name;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("token", localStorage.getItem("token"));
        this.http.post('http://localhost/it255/addroomtypeservice.php', data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
            if (_this.postResponse["_body"].indexOf("error") === -1) {
                _this.router.navigate(['./allroomtypes']);
            }
            else {
                alert("Neuspesno dodavanje tipa sobe");
            }
        });
    };
    AddRoomTypeComponent = __decorate([
        core_1.Component({
            selector: 'AddRoomTypeComponent',
            templateUrl: 'app/addroomtype/addroomtype.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AddRoomTypeComponent);
    return AddRoomTypeComponent;
}());
exports.AddRoomTypeComponent = AddRoomTypeComponent;
//# sourceMappingURL=addroomtype.component.js.map