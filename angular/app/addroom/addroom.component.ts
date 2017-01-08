import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'AddRoomComponent',
  templateUrl: 'app/addroom/addroom.html',
})

export class AddRoomComponent {

  http: Http;
  router: Router;
  postResponse: Response;
  room_types: Object[];
  addRoomForm = new FormGroup({
    roomname: new FormControl(),
    tv: new FormControl(),
    beds: new FormControl(),
    room_type: new FormControl()
  });
  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
    var headers = new Headers();
    this.addRoomForm.setValue({tv: 1, roomname: "", beds: 1, room_type: ""});
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    http.get('http://localhost/it255/getroomtypes.php', {headers: headers})
      .map(res => res.json()).share()
      .subscribe(data => {
          this.room_types = data.room_types;
        },
        err => {
          this.router.navigate(['./']);
        }
      );
  }
  onAddRoom(): void {
    var data = "roomName="+this.addRoomForm.value.roomname+"&hasTV="+this.addRoomForm.value.tv+"&beds="+this.addRoomForm.value.beds+"&room_type_id="+this.addRoomForm.value.room_type;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append("token",localStorage.getItem("token"));
    this.http.post('http://localhost/it255/addroomservice.php',data, {headers:headers})
      .map(res => res)
      .subscribe( data => this.postResponse = data,
        err => alert(JSON.stringify(err)),
        () => {
          if(this.postResponse["_body"].indexOf("error") === -1){
            this.router.navigate(['./allrooms']);
          }else{
            alert("Neuspesno dodavanje sobe");
          }
        }
      );

  }
}
